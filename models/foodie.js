const Joi = require('joi');
const mongoose = require('mongoose');

const foodieSchema = new mongoose.Schema({
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


async function validateFoodie(foodie) {
    const schema = Joi.object({
        name: Joi.string().required(),
        photo: Joi.array(),
        cost: Joi.number().required(),
        description: Joy.string()
    });

    return await schema.validateAsync(foodie)
}

const Foodie = mongoose.model('Foodie', foodieSchema);

exports.Foodie = Foodie;
exports.validate = validateFoodie;