const express = require('express');

const router = express.Router();

const postCtrl = require('../controllers/post');

router.post('/wall/posts', postCtrl.createPost);


module.exports = router;