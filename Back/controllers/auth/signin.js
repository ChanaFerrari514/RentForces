const { hash, serialize, cookie } = require('simple-stateless-auth-library')
const errors = require('../../misc/errors')
const { selectUser } = require('../../models/auth')

module.exports = (db) => async (req, res, next) => {
  const { email, password } = req.body
  
  const response = await selectUser(await db)(email, hash.compare(password))

  if (!response.ok) return next(errors[response.error_code || 500])

  serialize(res, response.content)
  console.log('res._headers and req.cookies');
  console.log(res._headers['set-cookie']);
  console.log(req.cookies);

  res.status(200).json({
    success: true,
    access_token: res._headers['set-cookie'].split('access_token=')[1].split(';')[0]
  })
}
 
