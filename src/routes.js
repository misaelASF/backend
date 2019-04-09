const router = require('express').Router();
const Box = require('./controllers/BoxController');
const File = require('./controllers/FileController');
const multerConfig = require('./config/multer');
const multer = require('multer');

router.post('/boxes', Box.store);
router.get('/boxes/:id', Box.show);
router.post('/boxes/:id/files', multer(multerConfig).single('file'), File.store);

module.exports = router;