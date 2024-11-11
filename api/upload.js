// api/upload.js
import multer from 'multer';
import path from 'path';
import { IncomingForm } from 'formidable';

// Temporary file storage (in-memory storage for serverless functions)
const storage = multer.memoryStorage();
const upload = multer({ storage }).single('coverImage');

// Handle the upload logic
export default function handler(req, res) {
  if (req.method === 'POST') {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error in file upload.' });
      }

      // Use your file handling logic here (e.g., save to cloud storage like AWS S3 or Vercel's temporary file system)
      const file = files.coverImage[0];
      
      if (file) {
        const fileName = `${Date.now()}-${file.originalFilename}`;
        
        // You can use AWS S3, Cloudinary, or any other service here for persistent storage
        // For now, just simulate a response with the file path
        res.status(200).json({ filePath: `/uploads/${fileName}` });
      } else {
        res.status(400).json({ error: 'No file uploaded' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
