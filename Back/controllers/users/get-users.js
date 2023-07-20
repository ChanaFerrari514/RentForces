module.exports = () => async (req, res, next) => {
    const { email } = res.locals

    res.status(200).json({
        success: true,
        data: {
            email,
        },
        })
    }

