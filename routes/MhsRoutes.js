const express = require('express');
const router = express.Router();
const MhsController = require('../controllers/MhsController');

router.get('/users', MhsController.getAllUsers);
// Tambahkan rute-rute berikut
router.post('/users', MhsController.createUser);
router.get('/users/:id', MhsController.getUserById);
router.put('/users/:id', MhsController.updateUser);
router.delete('/users/:id', MhsController.deleteUser);

module.exports = router;
