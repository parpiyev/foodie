const Joi = require('joi');
const mongoose = require('mongoose');

const snacksSchema = new mongoose.Schema({
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

async function snacksFoodie(snacks) {
    const schema = Joi.object({
        name: Joi.string().required(),
        photo: Joi.array(),
        cost: Joi.number().required(),
        description: Joy.string()
    });

    return await schema.validateAsync(snacks)
}

const Snacks = mongoose.model('Snacks', snacksSchema);

exports.Snacks = Snacks;
exports.validate = snacksFoodie;