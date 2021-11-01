const express = require('express');
const router = express.Router();
const {
    Foodie,
    validate
} = require('../models/foodie');
const multer = require('multer');
const path = require('path');

router.get('/', async (req, res) => {
    const foods = await Foodie.find({});
    res.json({
        success: true,
        data: foods
    });
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', 'uploads', 'foods'));
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
            photos.push(`/api/file/foods/${photo.filename}`)
        }

        const {
            name,
            cost
        } = req.body
        let foods = new Foodie({
            name: name,
            photo: photos,
            cost: cost
        });
        foods = await foods.save();

        res.status(201).json({
            success: true,
            message: "Food created"
        });

    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        let food = await Foodie.findById(req.params.id);
        if (!food) throw new Error("There is no such kind of food")

        res.json({
            success: true,
            data: food
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

        let foods = await Foodie.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            cost: req.body.cost
        }, {
            new: true
        });
        if (!foods) throw new Error('There is no such kind of food')
        res.status(200).json({
            success: true,
            message: "Food updated"
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
        let food = await Foodie.findByIdAndRemove(req.params.id);
        if (!food) throw new Error("There is no such kind of food")
        res.status(200).json({
            success: true,
            message: "Food deleted"
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;