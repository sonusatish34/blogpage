const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const cors = require('cors');
app.use(cors());

// Initialize the S3 client for DigitalOcean Spaces
const s3 = new AWS.S3({
  endpoint: new AWS.Endpoint('https://blr1.digitaloceanspaces.com'),
  accessKeyId: 'DO00EMW9VPKGYFANMCYQ',  // Replace with your DigitalOcean Spaces Access Key ID
  secretAccessKey: 'y+1iUnpYYwGZM0mq4O+vQEEWaNffAkKLKNQY9Y48IXQ',  // Replace with your Secret Access Key
  region: 'blr1',  // Replace with your DigitalOcean Space region
});

// Initialize Express
const app = express();
const port = 5000;

// Enable CORS to allow requests from your React app

// Setup Multer for handling file uploads
const storage = multer.memoryStorage();  // Store files in memory temporarily
const upload = multer({ storage });

// Endpoint to handle file uploads
app.post('/upload', upload.single('coverimages'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded');
  }

  const params = {
    Bucket: 'ldcars',  // Your DigitalOcean Space name
    Key: `ldcars_nextjs_images/blog_images/${file.originalname}`,  // Adjust the folder structure if needed
    Body: file.buffer,  // Upload the file buffer
    ContentType: file.mimetype,  // Automatically detects the MIME type
    ACL: 'public-read',  // Make the file public
  };

  // Upload the file to DigitalOcean Spaces
  s3.upload(params, (err, data) => {
    if (err) {
      return res.status(500).send('Error uploading file: ' + err);
    }
    // Send the file URL as a response
    res.status(200).send({ fileUrl: data.Location });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



