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



// Existing imports and setup
const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

// Set up multer storage
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Endpoint for uploading cover image
app.post('/upload', upload.single('coverImage'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const filePath = `/uploads/${req.file.filename}`;
  res.status(200).json({ filePath });
});

// Endpoint for uploading images from the Quill editor
app.post('/upload-editor-image', upload.single('editorImage'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const filePath = `/uploads/${req.file.filename}`;
  res.status(200).json({ filePath });
});

// Serve images from the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start server
app.listen(5000, () => console.log('Server started on http://localhost:5000'));
