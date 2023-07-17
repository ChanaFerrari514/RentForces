const router = require('express').Router();
const {authorizer} = require('../middlewares');
const { getAccommodation, createAccommodation, updateAccommodation, deleteAccommodation } = require('../controllers/accommodations');
console.log (authorizer)
// Routes pour les hébergements

module.exports = (db) => {
    router.get('/', getAccommodation(db));
    router.post('/', authorizer, createAccommodation(db));
    router.put('/:id', authorizer, updateAccommodation(db));
    router.delete('/:id', authorizer, deleteAccommodation(db));

    return = router;
}















