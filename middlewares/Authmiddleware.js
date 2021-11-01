const {
    verifyAuthToken,
    User
} = require('../models/user')

async function AuthUser(req, res, next) {
    let statusCode
    try {
        let token = req.headers.authorization
        if (!token || token == 'null') {
            statusCode = 404
            throw new Error('Token not found!')
        }

        let verifyToken = verifyAuthToken(token)
        if (!verifyToken) {
            statusCode = 401
            throw new Error('Token is invalid!')
        }

        let user = await User.findById(verifyToken._id)
        if (!user) {
            statusCode = 404
            throw new Error('User not found!')
        }

        req.user = verifyToken._id

        next()
    } catch (e) {
        res.status(statusCode || 400).json({
            success: false,
            message: e.message
        })
    }
}


module.exports = AuthUser