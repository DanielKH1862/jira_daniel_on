const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306, // Ubah ke port default MySQL jika menggunakan XAMPP
  user: 'root',
  password: '', // Sesuaikan dengan password MySQL Anda jika ada
  database: 'test_js'
});

module.exports = connection;
