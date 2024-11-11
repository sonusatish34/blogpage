// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
// const cors = require('cors'); // Import CORS middleware

// const app = express();
// const port = 5000;

// // Serve static files from the /uploads folder
// const corsOptions = {
//     origin: 'http://localhost:3000',  // Allow only this domain
//     methods: ['GET', 'POST', 'OPTIONS'],  // Allow GET, POST, and OPTIONS methods
//     allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
// };
// app.use(cors(corsOptions));  // This allows all origins by default
// app.use('/uploads', express.static('uploads'));

// // Set up multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadDir = './uploads';
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir);
//     }
//     cb(null, uploadDir); // save to the 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     const fileName = Date.now() + path.extname(file.originalname);
//     cb(null, fileName); // Use current timestamp for the filename
//   },
// });

// const upload = multer({ storage });

// // Set up the upload endpoint
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded');
//   }

//   // Send back the relative file path to the client
//   const filePath = `/uploads/${req.file.filename}`;
//   return res.json({ filePath });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// const express = require('express');
// const multer = require('multer');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.static('uploads'));

// // Multer configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// // Image upload route
// app.post('/api/upload', upload.single('image'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   // Send back the URL of the uploaded image
//   res.json({ url: `http://localhost:${port}/uploads/${req.file.filename}` });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });




const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

// Allow CORS if needed (for cross-origin requests)
app.use(cors());

// Set up storage location for uploaded files
const uploadDirectory = path.join(__dirname, 'uploads');

// Check if the uploads directory exists; if not, create it
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

// Configure Multer to save files to the 'uploads' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory); // Store in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Preserve file extension
  },
});

const upload = multer({ storage });

// Endpoint for uploading cover image
app.post('/upload', upload.single('coverImage'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const filePath = `/uploads/${req.file.filename}`; // Relative path to the uploaded file
  res.status(200).json({ filePath }); // Respond with the file path
});

// Serve images from the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start server
app.listen(5000, () => console.log('Server started on http://localhost:5000'));

