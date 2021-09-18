const express = require('express');
const app = require('../app');
const config = require('../config/config.js');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router.post('/upload', upload.single('avatar'), (req, res) => {

})

module.exports = router;