const router = require('express').Router();
const { authorizer } = require('../middlewares');
const { getAllReservations, 
        createReservation, 
        updateReservation, 
        deleteReservation 
} = require('../controllers/reservations');

// Routes pour les réservations
module.exports = (db) => {
  router.get('/', authorizer, (req, res, next) => getAllReservations(req, res, next, db));
  router.post('/', authorizer, (req, res, next) => createReservation(req, res, next, db));
  // NOTE: pas necessaire d'avoir :id dans le endpoint, c'est meme pas utilise dans updateReservation
  // En fait ca devrait etre appele insertReservation a la place car on ne modifie pas
  // une reservation en particuliere
  router.put('/', authorizer, (req, res, next) => updateReservation(req, res, next, db));
  router.delete('/:id', authorizer, (req, res, next) => deleteReservation(req, res, next, db));
  
  return router;
};



