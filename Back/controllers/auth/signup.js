const { hash, serialize } = require('simple-stateless-auth-library');
const { createUser } = require('../../models/auth');
const errors = require('../../misc/errors');

module.exports = (db) => async (req, res, next) => {  
  const { email, username, password } = req.body
    
  const encrypted = await hash.encrypt(password)

  const response = await createUser(await db)(email, username, encrypted)

  if (!response.ok) return next(errors[500])
  
  // IMPORTANT: necessaire (ce qu'on fait deja avec signin), sinon signout marche pas
  // apres signup; message d'erreur si on ne fait pas serialize: 
  // [verify]:  jwt must be provided
  serialize(res, response.content)

  res.status(200).json({
    success: true, 
  })
}