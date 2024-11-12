// api/upload.js
const AWS = require('aws-sdk');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const s3 = new AWS.S3({
  endpoint: new AWS.Endpoint('https://blr1.digitaloceanspaces.com'),
  accessKeyId: 'DO00EMW9VPKGYFANMCYQ',
  secretAccessKey: 'y+1iUnpYYwGZM0mq4O+vQEEWaNffAkKLKNQY9Y48IXQ',
  region: 'blr1',
});

const uploadImageHandler = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file uploaded' });
    }

    const fileContent = req.file.buffer;
    const fileName = `${Date.now()}_${req.file.originalname}`;

    const params = {
      Bucket: 'ldcars',
      Key: `ldcars_nextjs_images/blog_images/${fileName}`,
      Body: fileContent,
      ContentType: req.file.mimetype,
      ACL: 'public-read',
    };

    s3.upload(params, (err, data) => {
      if (err) {
        return res.status(500).json({ success: false, error: 'Error uploading file' });
      }

      return res.json({
        success: true,
        imageUrl: data.Location?.replace('https://ldcars.blr1.', 'https://ldcars.blr1.cdn.'),
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = uploadImageHandler;
