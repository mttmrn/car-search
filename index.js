const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const path = require('path');

// Database string

dotenv.config();

// Connect to db
mongoose.connect(
    process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connected to DB!'))

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

//Route Middleware
app.use('/api/user', authRoute);
app.use(express.static(path.join(__dirname, 'public')))

app.post('/api/user', (req, res) => {
    console.log(req.body)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server up and running :)'));
