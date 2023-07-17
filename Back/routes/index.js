const router = require('express').Router()

const authRoutes = require('./auth')
const usersRoutes = require('./users')
const accommodationsRoutes = require('./accommodations')
const reservationsRoutes = require('./reservations')

module.exports = (db) => {
    router.use('/auth', authRoutes(db))
    router.use('/users', usersRoutes(db))
    router.use('/accommodations',accommodationsRoutes())
    router.use('/reservations', reservationsRoutes(db));


    return router
}

