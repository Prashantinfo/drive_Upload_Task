const stream = require('stream');
const { drive } = require('../config/googleDrive.config');

class DriveService {
    async uploadFile(fileBuffer, originalname, mimetype) {
        const bufferStream = new stream.PassThrough();
        bufferStream.end(fileBuffer);

        const fileMetadata = {
            name: originalname,
            parents: [process.env.GOOGLE_DRIVE_FOLDER_ID] // Optional folder ID
        };

        const media = {
            mimeType: mimetype,
            body: bufferStream
        };

        const response = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: 'id, webViewLink'
        });

        return response.data;
    }
}

module.exports = new DriveService();