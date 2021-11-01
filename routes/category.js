const router = require('express').Router()
const category = require('../models/category')
const AuthMiddleware = require('../middlewares/Authmiddleware')


router.get('/', AuthMiddleware, async (req, res) => {
    try {

        let categories = await category.find({})

        if (!categories) throw new Error('Categories not found!')

        res.status(200).json({
            success: true,
            data: categories
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
})



module.exports = router