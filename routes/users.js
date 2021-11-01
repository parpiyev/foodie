const {
    User,
    validate
} = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const _ = require('lodash');

router.post('/', async (req, res) => {
    try {
        const validation = await validate(req.query);

        let user = await User.findOne({
            phone: req.query.phone
        });

        if (user) throw new Error('User already exist')

        user = new User(_.pick(req.query, ['name', 'phone', 'birthday', 'password']));

        const salt = await bcrypt.genSalt();

        user.password = await bcrypt.hash(user.password, salt);

        await user.save();

        const token = user.generateAuthToken();

        res.json({
            success: true,
            token
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        });
    }
});

module.exports = router;