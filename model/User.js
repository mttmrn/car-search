const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        min: 6
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    cratedAt: {
        type: Date,
        required: true,
        default: new Date()
    }
});

module.exports = mongoose.model('User', userSchema);
