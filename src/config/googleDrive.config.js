require('dotenv').config();
const { google } = require('googleapis');

const GOOGLE_DRIVE_CREDENTIALS = {
    client_id: process.env.GOOGLE_CLIENT_ID,


    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
};
console.log('client_id ye hai: ', GOOGLE_DRIVE_CREDENTIALS.client_id);

const oauth2Client = new google.auth.OAuth2(
    GOOGLE_DRIVE_CREDENTIALS.client_id,
    GOOGLE_DRIVE_CREDENTIALS.client_secret,
    GOOGLE_DRIVE_CREDENTIALS.redirect_uri
);

oauth2Client.setCredentials({
    refresh_token: GOOGLE_DRIVE_CREDENTIALS.refresh_token
});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});

module.exports = { drive };