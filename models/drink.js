const Joi = require('joi');
const mongoose = require('mongoose');

const drinksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    photo: {
        type: Array,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    category_name: {
        type: String
    }

});

async function validateDrinks(drinks) {
    const schema = Joi.object({
        name: Joi.string().required(),
        photo: Joi.array(),
        cost: Joi.number().required(),
    });

    return await schema.validateAsync(drinks)
}

const Drinks = mongoose.model('Drinks', drinksSchema);

exports.Drinks = Drinks;
exports.validate = validateDrinks;