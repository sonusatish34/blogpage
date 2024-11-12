const AWS = require('aws-sdk');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const s3 = new AWS.S3({
  endpoint: new AWS.Endpoint('https://blr1.digitaloceanspaces.com'),
  accessKeyId: 'DO00EMW9VPKGYFANMCYQ',  // Your DigitalOcean Spaces Access Key ID
  secretAccessKey: 'y+1iUnpYYwGZM0mq4O+vQEEWaNffAkKLKNQY9Y48IXQ',  // Your DigitalOcean Spaces Secret Access Key
  region: 'blr1',  // Your DigitalOcean Space region
});

const uploadImageHandler = async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({ success: false, error: 'No file uploaded' });
    }

    // Generate a unique file name
    const fileName = `${Date.now()}_${file.originalname}`;

    // Define upload parameters
    const params = {
      Bucket: 'ldcars',  // Your DigitalOcean Space name
      Key: `ldcars_nextjs_images/blog_images/${fileName}`,  // Path where the file will be stored
      Body: file.buffer,  // File content from memory
      ContentType: file.mimetype,  // MIME type of the uploaded file
      ACL: 'public-read',  // Make the file publicly accessible
    };

    // Upload the file to DigitalOcean Spaces
    s3.upload(params, (err, data) => {
      if (err) {
        return res.status(500).json({ success: false, error: 'Error uploading file' });
      }

      // Return the URL of the uploaded image
      return res.json({
        success: true,
        imageUrl: data.Location?.replace('https://ldcars.blr1.', 'https://ldcars.blr1.cdn.'),  // Publicly accessible URL
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = uploadImageHandler;
