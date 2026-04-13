const express         = require('express');
const logger          = require('./middlewares/logger');
const validateArtista = require('./middlewares/validateArtista');
const validateAlbum   = require('./middlewares/validateAlbum');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/artistas', require('./routes/artistaRoutes'));
app.use('/albums',   require('./routes/albumRoutes'));

module.exports = app;