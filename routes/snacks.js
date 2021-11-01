const express = require('express');
const router = express.Router();
const {
    Snacks,
    validate
} = require('../models/snack');
const multer = require('multer');
const CategoryModel = require('../models/category')
const path = require('path');
const Authmiddleware = require('../middlewares/Authmiddleware')
router.get('/', Authmiddleware, async (req, res) => {
    const snacks = await Snacks.find({})
    res.json({
        success: true,
        data: snacks
    });
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', 'uploads', 'snacks'));
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
            photos.push(`/api/file/snacks/${photo.filename}`)
        }
        let findCategory = await CategoryModel.findOne({
            name: "Snacks"
        })
        const {
            name,
            cost
        } = req.body
        let snacks = new Snacks({
            name: name,
            photo: photos,
            cost: cost,
            category_id: findCategory._id
        });
        snacks = await snacks.save();

        res.status(201).json({
            success: true,
            message: "Snack created"
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
        let snack = await Snacks.findById(req.params.id);
        if (!snack) throw new Error("There is no such kind of snack")

        res.json({
            success: true,
            data: snack
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

        let snacks = await Snacks.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            cost: req.body.cost
        }, {
            new: true
        });
        if (!snacks) throw new Error('There is no such kind of snack')
        res.status(200).json({
            success: true,
            message: "Snack updated"
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
        let snack = await Snacks.findByIdAndRemove(req.params.id);
        if (!snack) throw new Error("There is no such kind of snack")
        res.status(200).json({
            success: true,
            message: "Snack deleted"
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;