const express = require('express');
const router = express.Router();
const {
    User
} = require('../models/user')
const {
    Order,
    productValidation
} = require('../models/orders')
const Authmiddleware = require('../middlewares/Authmiddleware');
const {
    paths
} = require('../swagger');


router.post('/', Authmiddleware, async (req, res) => {
    try {
        let userorder = req.query.order

        let {
            error
        } = await productValidation(userorder)

        if (error) throw new Error(error.message)

        let newOrder
        if (typeof (userorder[0].cat) == 'string') {
            newOrder = userorder
        } else {
            let proObj = {}
            let allProducts = []
            for (let item in userorder[0].product_id) {
                console.log(item, userorder[0].quantity[item])
                proObj.quantity = userorder[0].quantity[item]
                proObj.sum = userorder[0].sum[item]
                proObj.name = userorder[0].name[item]
                proObj.product_id = userorder[0].product_id[item]
                proObj.cat = userorder[0].cat[item]
                allProducts.push(proObj)
                proObj = {}
            }
            newOrder = allProducts
        }
        await Order.create({
            user_id: req.user,
            products: newOrder
        })

        res.status(200).json({
            success: true
        })

    } catch (error) {
        res.status(400).json({
            success: true,
            message: error.message
        })
    }
})



router.get('/', Authmiddleware, async (req, res) => {
    try {

        let AllOrdersOfUser = await Order.find({
            user_id: req.user
        })

        let mappingUserOrders = AllOrdersOfUser.map((order) => {
            return {
                status: order.status,
                products: order.products.map((product) => {
                    return {
                        id: product.product_id,
                        category: product.cat,
                        quantity: product.quantity,
                        sum: product.sum
                    }
                }),
                createdAt: order.createdAt
            }

        })

        res.status(200).json({
            success: true,
            data: mappingUserOrders
        })

    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
})

module.exports = router