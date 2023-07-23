require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { db, cors: options } = require('./configs');
const errors = require('./misc/errors');

const app = express();

app.use(cors(options));
// Pour utiliser les body
app.use(express.json());
app.use(express.urlencoded({extended: true}));
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

