const express = require('express');
const Authmiddleware = require('../middlewares/Authmiddleware');
const router = express.Router();
const {
    Giolocation,
    validate
} = require('../models/giolocation');

router.get('/', Authmiddleware, async (req, res) => {
    const gio = await Giolocation.find({})
    res.json({
        success: true,
        data: gio
    });
});

router.post('/', async (req, res) => {
    try {
        await validate(req.body);

        const {
            name,
            giolocation
        } = req.body
        let gio = new Giolocation({
            name: name,
            giolocation: giolocation
        });
        gio = await gio.save();

        res.status(201).json({
            success: true,
            message: "Giolocation created"
        });

    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        });
    }
});

router.get('/:id', Authmiddleware, async (req, res) => {
    try {
        let gio = await Giolocation.findById(req.params.id);
        if (!gio) throw new Error("There is no such kind of giolocation")

        res.json({
            success: true,
            data: gio
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        });
    }
});


router.put('/:id', async (req, res) => {
    try {
        await validate(req.body);

        let gio = await Giolocation.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            giolocation: req.body.giolocation
        }, {
            new: true
        });
        if (!gio) throw new Error('There is no such kind of giolocation')
        res.status(200).json({
            success: true,
            message: "Giolocation updated"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let gio = await Giolocation.findByIdAndRemove(req.params.id);
        if (!gio) throw new Error("There is no such kind of giolocation")
        res.status(200).json({
            success: true,
            message: "Giolocation deleted"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;