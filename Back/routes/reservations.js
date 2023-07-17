const router = require('express').Router();
const { getReservation, createReservation, updateReservation, deleteReservation } = require('../controllers/reservations');
const { authorizer } = require('../middlewares');

// Routes pour les réservations
router.get('/', authorizer, getReservation);
router.post('/', authorizer, createReservation);
router.put('/:id', authorizer, updateReservation);
router.delete('/:id', authorizer, deleteReservation);

module.exports = router;