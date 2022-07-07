const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const userCtrl = require('../controllers/user');
const apiLimiter = require('../middleware/api-limiter');

router.post('/signin', apiLimiter, userCtrl.signin);
router.post('/login', apiLimiter, userCtrl.login);
router.put('/users/:id', auth, multer, userCtrl.modifyUser);
router.delete('/users/:id', auth, multer, userCtrl.deleteUser);
router.get('/users/:id', auth, multer, userCtrl.getOneUser);

module.exports = router;
