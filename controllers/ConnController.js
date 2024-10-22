const dbConnection = require('../config/database');

exports.connDB = (req, res) => {
  dbConnection.connect((err) => {
    if (err) {
      res.status(500).send('Sorry, DB connection failed!');
      console.error('Error connecting to database:', err);
    } else {
      res.send('Successfully connected to DB!');
      console.log('Successfully connected to database');
    }
  });
};

exports.getAllUsers = (req, res) => {
  dbConnection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching users');
      console.error('Error fetching users:', err);
    } else {
      res.json(results);
    }
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  dbConnection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).send('Error fetching user');
      console.error('Error fetching user:', err);
    } else if (results.length === 0) {
      res.status(404).send('User not found');
    } else {
      res.json(results[0]);
    }
  });
};
