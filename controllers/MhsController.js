const db = require('../config/database');

exports.getAllUsers = (req, res) => {
  const query = 'SELECT * FROM users';
  
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error mengambil data users:', error);
      res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data users' });
    } else {
      res.status(200).json(results);
    }
  });
};

// Tambahkan fungsi-fungsi berikut

exports.createUser = (req, res) => {
  const { npm, nama, no_hp } = req.body;
  const query = 'INSERT INTO users (npm, nama, no_hp) VALUES (?, ?, ?)';
  
  db.query(query, [npm, nama, no_hp], (error, results) => {
    if (error) {
      console.error('Error membuat user baru:', error);
      res.status(500).json({ message: 'Terjadi kesalahan saat membuat user baru' });
    } else {
      res.status(201).json({ message: 'User berhasil dibuat', id: results.insertId });
    }
  });
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM users WHERE id = ?';
  
  db.query(query, [userId], (error, results) => {
    if (error) {
      console.error('Error mengambil data user:', error);
      res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data user' });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'User tidak ditemukan' });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const { npm, nama, no_hp } = req.body;
  const query = 'UPDATE users SET npm = ?, nama = ?, no_hp = ? WHERE id = ?';
  
  db.query(query, [npm, nama, no_hp, userId], (error, results) => {
    if (error) {
      console.error('Error memperbarui user:', error);
      res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui user' });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: 'User tidak ditemukan' });
    } else {
      res.status(200).json({ message: 'User berhasil diperbarui' });
    }
  });
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';
  
  db.query(query, [userId], (error, results) => {
    if (error) {
      console.error('Error menghapus user:', error);
      res.status(500).json({ message: 'Terjadi kesalahan saat menghapus user' });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: 'User tidak ditemukan' });
    } else {
      res.status(200).json({ message: 'User berhasil dihapus' });
    }
  });
};
