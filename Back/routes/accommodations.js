const router = require('express').Router();
const { authorizer } = require('../middlewares');
const { getAccommodation, 
        createAccommodation, 
        updateAccommodation, 
        deleteAccommodation 
    } = require('../controllers/accommodations');
console.log (authorizer)
// Routes pour les hébergements

module.exports = (db) => {
    router.get('/', getAccommodation);
    router.post('/', authorizer, (req, res, next) => createAccommodation(req, res, next, db));
    router.put('/:id', authorizer,(req, res, next) => updateAccommodation(req, res, next, db));
    router.delete('/:id', authorizer, (req, res, next) => deleteAccommodation (req, res, next, db));

    return router;
};















