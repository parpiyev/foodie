const mongoose = require('mongoose');
const Joi = require('joi')


const ordersSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    products: [{
        product_id: {
            type: String,
            required: true
        },
        cat: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        sum: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }],
    status: {
        type: String,
        default: 'pending'
    }
}, {
    timestamps: true
})


async function productValidation(order) {
    let productSchema = Joi.object().keys({
        product_id: Joi.alternatives().try(Joi.string(), Joi.array()),
        cat: Joi.alternatives().try(Joi.string(), Joi.array()),
        quantity: Joi.alternatives().try(Joi.string(), Joi.array()),
        sum: Joi.alternatives().try(Joi.string(), Joi.array()),
        name: Joi.alternatives().try(Joi.string(), Joi.array()),
    })

    let ordersCart = Joi.array().items(productSchema)

    return await ordersCart.validateAsync(order)
}


const Order = mongoose.model('Order', ordersSchema)

module.exports = {
    Order,
    productValidation
}