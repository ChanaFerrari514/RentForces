const router = require('express').Router();
const { authorizer } = require('../middlewares');
const { getReservation, 
        createReservation, 
        updateReservation, 
        deleteReservation 
    } 
    = require('../controllers/reservations');


// Routes pour les réservations
module.exports = (db) => {

    router.get('/', authorizer, (req, res, next) => getReservation(req, res, next, db));
    router.post('/', authorizer, (req, res, next) => createReservation(req, res, next, db));
    router.put('/:id', authorizer, (req, res, next) => updateReservation(req, res, next, db));
    router.delete('/:id', authorizer, (req, res, next) => deleteReservation(req, res, next, db));

return router;
};



