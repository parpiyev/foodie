const {
    User
} = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const _ = require('lodash');

const JOI = require('joi')


router.post('/', async (req, res) => {
    try {
        const validation = await validate(req.query);

        let user = await User.findOne({
            phone: req.query.phone
        });

        if (!user) throw new Error('Phone number is incorrect!')
        const isValidPassword = await bcrypt.compare(req.query.password, user.password);
        if (!isValidPassword) throw new Error('Passsword is incorrect!')

        const token = user.generateAuthToken();

        res.json({
            success: true,
            token
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

async function validate(req) {
    const schema = JOI.object({
        phone: JOI.number().required(),
        password: JOI.string().min(5).max(255).required()
    })
    return await schema.validate(req)
}

module.exports = router;