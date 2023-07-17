const express = require('express');
const router = express.Router();

const getAccommodation = require('./getAccommodation');
const createAccommodation = require('./createAccommodation');
const updateAccommodation = require('./updateAccommodation');
const deleteAccommodation = require('./deleteAccommodation');
module.exports =  {
getAccommodation,
createAccommodation,
updateAccommodation,
deleteAccommodation
}

