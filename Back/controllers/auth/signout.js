const { cookie } = require('simple-stateless-auth-library')

module.exports = () => async (req, res, next) => {
    cookies.clear(res)

    res.status(200).json({
        success: true,
    })
}