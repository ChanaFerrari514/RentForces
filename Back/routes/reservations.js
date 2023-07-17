const router = require('express').Router();
const { getReservation, createReservation, updateReservation, deleteReservation } = require('../controllers/reservations');
const { authorizer } = require('../middlewares');

// Routes pour les réservations
module.exports = (db) => {

router.get('/', authorizer, getReservation(db));
router.post('/', authorizer, createReservation(db));
router.put('/:id', authorizer, updateReservation(db));
router.delete('/:id', authorizer, deleteReservation(db));

return router;
}



