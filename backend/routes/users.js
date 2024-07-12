const express = require('express');
const { loginUser,addUser } = require('../controllers/userController');

const router = express.Router();

router.post('/login', loginUser);
router.post('/add',addUser)
module.exports = router;