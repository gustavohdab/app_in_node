require('express-async-errors')
const database = require('./database/sqlite');

const AppError = require('./utils/AppError');
const express = require('express');

const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes);

database();

app.use((err, req, res, next) => {

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error(err);

  return res.status(500).json({ error: 'Internal server error' });
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server listening on port ${port} 🔥 can be accessed at http://localhost:${port}`);
});