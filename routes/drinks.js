const express = require('express');
const router = express.Router();
const {
    Drinks,
    validate
} = require('../models/drink');
const multer = require('multer');
const path = require('path');
const Authmiddleware = require('../middlewares/Authmiddleware');

router.get('/', Authmiddleware, async (req, res) => {
    const drinks = await Drinks.find({});
    res.json({
        success: true,
        data: drinks
    });
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', 'uploads', 'drinks'));
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}.png`);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.post('/', upload.array('image', 10), async (req, res) => {
    try {
        const validation = await validate(req.body);

        let photos = []
        for (let photo of req.files) {
            photos.push(`/api/file/drinks/${photo.filename}`)
        }

        const {
            name,
            cost
        } = req.body
        let drinks = new Drinks({
            name: name,
            photo: photos,
            cost: cost
        });
        drinks = await drinks.save();

        res.status(201).json({
            success: true,
            message: "Drink created"
        });

    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        });
    }
});

router.get('/:id', Authmiddleware, async (req, res) => {
    try {
        let drink = await Drinks.findById(req.params.id);
        if (!drink) throw new Error("There is no such kind of drink")

        res.json({
            success: true,
            data: drink
        });
    } catch (e) {
        res.status(404).json({
            success: false,
            message: e.message
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const validation = await validate(req.body);

        let drinks = await Drinks.findByIdAndUpdate(req.params.id, {
            ...req.body
        }, {
            new: true
        });
        if (!drinks) throw new Error('There is no such kind of drink')
        res.status(200).json({
            success: true,
            message: "Drink updated"
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let drink = await Drinks.findByIdAndRemove(req.params.id);
        if (!drink) throw new Error("There is no such kind of drink")
        res.status(200).json({
            success: true,
            message: "Drink deleted"
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;