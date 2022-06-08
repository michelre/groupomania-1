const express = require('express');
const router = express.Router();


const multer = require('../middleware/multer-config');

const userCtrl = require('../controllers/user');

router.post('/signin', multer, userCtrl.signin);
router.post('/login', userCtrl.login);

module.exports = router;