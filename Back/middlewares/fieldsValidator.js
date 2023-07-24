const errors = require('../misc/errors')

module.exports = (req, res, next) => {
    const { email, password } = req.body

        if(!email || !password) return next(errors[400])

        if(password.length < 8) return next(errors['pass_length'])
    next()
}

