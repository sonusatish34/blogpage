import fs from 'fs';
import path from 'path';
import formidable from 'formidable'; // Import formidable for handling file uploads

// Set up the temporary directory path for Vercel's /tmp folder
const TEMP_DIR = '/tmp';

export const config = {
  api: {
    bodyParser: false, // Disable Vercel's built-in body parser to handle multipart/form-data
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Create a new formidable instance to handle the incoming file data
    const form = new formidable.IncomingForm();

    // Set the upload directory to Vercel's /tmp folder
    form.uploadDir = TEMP_DIR;
    form.keepExtensions = true; // Keep the original file extension
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Error parsing form data:", err); // Log the error for debugging
        return res.status(500).json({ error: 'Error in file upload.' });
      }

      // Check if the file exists in the 'coverImage' field
      const file = files.coverImage;
      if (file) {
        const filePath = path.join(TEMP_DIR, file.newFilename); // Temporary file path
        console.log('Uploaded file path:', filePath); // Log for debugging
        
        // Send back the file path or URL as needed
        return res.status(200).json({
          filePath: `/api/uploads/${file.newFilename}`, // This could be used for accessing the file
        });
      } else {
        return res.status(400).json({ error: 'No file uploaded' });
      }
    });
  } else {
    // Return an error if the method is not POST
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
