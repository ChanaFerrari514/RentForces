const router = require('express').Router();
const {authorizer} = require('../middlewares');
const { getAccommodation, createAccommodation, updateAccommodation, deleteAccommodation } = require('../controllers/accommodations');
console.log (authorizer)
// Routes pour les hébergements
router.get('/', getAccommodation);
router.post('/', authorizer, createAccommodation);
router.put('/:id', authorizer, updateAccommodation);
router.delete('/:id', authorizer, deleteAccommodation);

module.exports = router;












