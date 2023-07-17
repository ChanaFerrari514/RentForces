const express = require('express');
const router = express.Router();

const getReservation = require('./getReservation');
const createReservation = require('./createReservation');
const updateReservation = require('./updateReservation');
const deleteReservation = require('./deleteReservation');
module.exports =  {
getReservation,
createReservation,
updateReservation,
deleteReservation
}