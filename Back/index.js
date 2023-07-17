require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./configs/db');
const errors = require('./misc/errors');
const app = express();

// Pour utiliser les body
app.use(express.json());
app.use(cookieParser());

const routes = require('./routes')(db);



app.use(routes);



//  Gestion des erreurs 404
app.use((req, res, next) => {
  next(errors[404])
});

// Gestion des autres erreurs
app.use(({ statusCode, error }, req, res, next) => {
  res.status(statusCode).json({
      success: false,
      message: error.message,
  });
});


 app.listen(
  process.env.PORT,
  () => console.info(`> listening at: ${process.env.PORT}`)
);

