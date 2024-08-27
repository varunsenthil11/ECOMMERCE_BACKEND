const express = require('express');
require('dotenv').config();
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/orderRoute')
require('./dbConnection');
const { auth } = require('./middlewares/auth');
const checkout = require('./controllers/checkout');
const logout = require('./controllers/logout');


// initializing application
const app = express();
app.use(express.json());


// API's
app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/order', orderRoute)
app.post('/checkout', auth, checkout);
app.post('/logout',auth, logout);

// running server
app.listen(5001, ()=>{
    console.log('Server running...');
})

