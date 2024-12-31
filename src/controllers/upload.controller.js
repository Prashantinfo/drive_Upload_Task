const DriveService = require('../services/drive.service');

class UploadController {
    async uploadFile(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({
                    success: false,
                    message: 'No file uploaded'
                });
            }
            console.log('req.file: ', req.file);
            

            const { buffer, originalname, mimetype } = req.file;
            console.log({ buffer: buffer, originalname: originalname, mimetype: mimetype });
            
            
            const uploadedFile = await DriveService.uploadFile(
                buffer,
                originalname,
                mimetype
            );

            return res.status(200).json({
                success: true,
                message: 'File uploaded successfully',
                data: {
                    fileId: uploadedFile.id,
                    webViewLink: uploadedFile.webViewLink
                }
            });
        } catch (error) {
            console.error('Upload error:', error);
            return res.status(500).json({
                success: false,
                message: 'Error uploading file to Google Drive',
                error: error.message
            });
        }
    }
}

module.exports = new UploadController();
