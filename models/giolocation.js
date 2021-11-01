const Joi = require('joi');
const mongoose = require('mongoose');

const giolocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    giolocation: {
        type: Number,
        required: true
    }
});

async function validateGiolocation(gio) {
    const schema = Joi.object({
        name: Joi.string().required(),
        giolocation: Joi.number().required(),
    });

    return await schema.validateAsync(gio)
}

const Giolocation = mongoose.model('Giolocation', giolocationSchema);

exports.Giolocation = Giolocation;
exports.validate = validateGiolocation;