const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controller');
const uploadMiddleware = require('../middlewares/upload.middleware');

router.post('/', uploadMiddleware, uploadController.uploadFile.bind(uploadController));

module.exports = router;