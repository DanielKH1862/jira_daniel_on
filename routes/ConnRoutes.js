const express = require('express');
const router = express.Router();
const ConnController = require('../controllers/ConnController');

router.get('/', ConnController.getAllUsers);
router.get('/users', ConnController.getAllUsers);
router.get('/users/:id', ConnController.getUserById);

module.exports = router;
