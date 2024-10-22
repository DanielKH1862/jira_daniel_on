const express = require('express');
const ConnRoutes = require('./routes/ConnRoutes');
const MhsRoutes = require('./routes/MhsRoutes');
const database = require('./config/database');

const app = express();
const port = 3000;

// Middleware untuk mengurai JSON
app.use(express.json());

app.use('/api/ConnRoutes',
    ConnRoutes
);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
