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



// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const cors = require('cors');  // You might need this if your frontend and backend are on different ports
// const app = express();
// const PORT = 5000;

// // Set up CORS
// app.use(cors());

// // Create a storage configuration for multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // Store the file in the 'uploads' folder
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     // Create a unique filename based on the original file name and timestamp
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// // Initialize multer with the storage configuration
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5 * 1024 * 1024 },  // Limit file size to 5MB
// }).single('coverImage');  // 'coverImage' is the field name you're using for file upload

// // Serve static files from the 'uploads' directory
// app.use('/uploads', express.static('uploads'));

// // Endpoint for uploading images
// app.post('/upload', upload, (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   // Return the file path in the response
//   res.json({ filePath: `/uploads/${req.file.filename}` });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 5000;

// app.use(cors());
app.use(express.static('uploads')); // Serve static files from the uploads folder
app.use(cors({
  origin: ['https://blogpage-theta.vercel.app'], // Add your deployed frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store images in the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with a timestamped name
  },
});

const upload = multer({ storage: storage }).single('coverImage');

app.post('/upload', upload, (req, res) => {
  if (req.file) {
    res.json({ filePath: `/uploads/${req.file.filename}` }); // Send the relative file path as a response
  } else {
    res.status(400).send('No file uploaded');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


