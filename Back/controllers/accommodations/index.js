const express = require('express');

const getAllAccommodations = require('./getAllAccommodations');
const getOneAccommodation = require('./getOneAccommodation');
const createAccommodation = require('./createAccommodation');
const updateAccommodation = require('./updateAccommodation');
const deleteAccommodation = require('./deleteAccommodation');

module.exports =  {
  getAllAccommodations,
  getOneAccommodation,
  createAccommodation,
  updateAccommodation,
  deleteAccommodation
}

