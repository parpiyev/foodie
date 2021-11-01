const Joi = require('joi');
const mongoose = require('mongoose');

const soucesSchema = new mongoose.Schema({
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
    }
});

async function validateSouces(souces) {
    const schema = Joi.object({
        name: Joi.string().required(),
        photo: Joi.array(),
        cost: Joi.number().required(),
    });

    return await schema.validateAsync(souces)
}

const Souces = mongoose.model('Souces', soucesSchema);

exports.Souces = Souces;
exports.validate = validateSouces;