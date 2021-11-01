const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    birthday: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
}, {
    timestamps: true
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id
    }, config.get('jwtPrivateKey'));
    return token;
}

module.exports.verifyAuthToken = function (token) {
    try {
        const verifyToken = jwt.verify(token, config.get('jwtPrivateKey'))
        return verifyToken
    } catch (e) {
        return false
    }
}

const User = mongoose.model('User', userSchema);

async function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        phone: Joi.number().required(),
        birthday: Joi.date().required(),
        password: Joi.string().min(5).max(255).required()
    });

    return await schema.validateAsync(user);
}

exports.User = User;
exports.validate = validateUser;