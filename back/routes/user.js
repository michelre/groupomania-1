const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const userCtrl = require('../controllers/user');

router.post('/signin', multer, userCtrl.signin);
router.post('/login', userCtrl.login);
router.put('/users/:id', auth, multer, userCtrl.modifyUser);
router.delete('/users/:id', auth, multer, userCtrl.deleteUser);

module.exports = router;