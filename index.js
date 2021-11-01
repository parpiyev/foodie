const express = require('express');
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const foodsRoute = require('./routes/foods');
const drinksRoute = require('./routes/drinks');
const snacksRoute = require('./routes/snacks');
const soucesRoute = require('./routes/souces');
const categoryRoute = require('./routes/category');
const gioRoute = require('./routes/gio');
const orderRoute = require('./routes/order');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require("./swagger");

require('dotenv').config()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

if (!config.get('jwtPrivateKey')) {
    console.error('JIDDIY XATO: virtualdars_jwtPrivateKey muhit o\'zgaruvchisi aniqlanmagan.');
    process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log('MongoDBga ulanish hosil qilindi...');
    })
    .catch((err) => {
        console.error('MongoDBga ulanish vaqtida xato ro\'y berdi...', err);
    });
mongoose.set('useFindAndModify', false);

app.use(express.json());
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/foods', foodsRoute);
app.use('/api/drinks', drinksRoute);
app.use('/api/snacks', snacksRoute);
app.use('/api/souces', soucesRoute);
app.use('/api/gio', gioRoute);
app.use('/api/order', orderRoute);
app.use('/api/categories', categoryRoute);
app.use("/api/file", express.static(path.join(__dirname, 'uploads')))

app.get('/status', (req, res) => {

    res.json({
        success: true
    })
})
const port = process.env.PORT || 5000;



app.listen(port, () => {
    console.log(`${port}chi portni eshitishni boshladim...`);
});