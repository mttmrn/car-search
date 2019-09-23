const router = require('express').Router();
const User = require('../model/User')

router.post('/', async (req, res) => {
    // Only to see the data on console
    console.log(req.body);
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;