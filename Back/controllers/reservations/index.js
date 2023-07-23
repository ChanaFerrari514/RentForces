const express = require('express');

const getAllReservations = require('./getAllReservations');
const createReservation = require('./createReservation');
const updateReservation = require('./updateReservation');
const deleteReservation = require('./deleteReservation');

module.exports =  {
  getAllReservations,
  createReservation,
  updateReservation,
  deleteReservation
}
