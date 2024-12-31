const express = require('express');
const uploadRoutes = require('./routes/upload.routes');

const app = express();

app.use('/api/upload', uploadRoutes);

module.exports = app;


