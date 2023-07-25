const router = require('express').Router();
const { authorizer } = require('../middlewares');
const { getAllAccommodations, 
 	getOneAccommodation, 
        createAccommodation, 
        updateAccommodation, 
        deleteAccommodation 
} = require('../controllers/accommodations');
const os = require('os');
const multer = require('multer');
const upload = multer({ dest: os.tmpdir() });

// Routes pour les hébergements
module.exports = (db) => {
  // NOTE: si on ne fait pas signup/signin, endpoints retournent erreur d'auth:
  // [verify]:  jwt must be provided
  router.post('/', authorizer, upload.single('picture'), 
    (req, res, next) => createAccommodation(req, res, next));	
  router.get('/', authorizer, (req, res, next) => getAllAccommodations(req, res, next, db));
  router.get('/:id', authorizer, (req, res, next) => getOneAccommodation(req, res, next, db));
  router.put('/:id', authorizer, (req, res, next) => updateAccommodation(req, res, next, db));
  router.delete('/:id', authorizer, (req, res, next) => deleteAccommodation (req, res, next, db));

  return router;
};

