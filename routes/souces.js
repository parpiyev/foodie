const express = require('express');
const router = express.Router();
const {
    Souces,
    validate
} = require('../models/souce');
const multer = require('multer');
const path = require('path');
const AuthMiddleware = require('../middlewares/Authmiddleware')

router.get('/', AuthMiddleware, async (req, res) => {
    const souces = await Souces.find({})
    res.json({
        success: true,
        data: souces
    });
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', 'uploads', 'souces'));
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
            photos.push(`/api/file/souces/${photo.filename}`)
        }

        const {
            name,
            cost
        } = req.body
        let souces = new Souces({
            name: name,
            photo: photos,
            cost: cost
        });
        souces = await souces.save();

        res.status(201).json({
            success: true,
            message: "Souce created"
        });

    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        });
    }
});

router.get('/:id', AuthMiddleware, async (req, res) => {
    try {
        let souce = await Souces.findById(req.params.id);
        if (!souce) throw new Error("There is no such kind of souce")

        res.json({
            success: true,
            data: souce
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

        let souces = await Souces.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            cost: req.body.cost
        }, {
            new: true
        });
        if (!souces) throw new Error('There is no such kind of souce')
        res.status(200).json({
            success: true,
            message: "Souce updated"
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
        let souce = await Souces.findByIdAndRemove(req.params.id);
        if (!souce) throw new Error("There is no such kind of souce")
        res.status(200).json({
            success: true,
            message: "Souce deleted"
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;