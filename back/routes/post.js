const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');

router.post('/wall/posts', auth, multer, postCtrl.createPost);


module.exports = router;