const router = require('express').Router();
const User = require('../model/User')

router.post('/register', async (req, res) => {
    // check if fields are empty
    const email = req.body.email
          password = req.body.password,
          confirmPass = req.body.confirmPass;

    if(email === '' || password === '' || confirmPass === '') {
        return res.json({success: false, message: 'You must fill all fields'});
    } ;

    if (password === confirmPass) {
        return res.json({success: true});
    };

    if (email.length <= 6 || password.length <= 6) {
        return res.json({success:false, message: "Email and password must be greater than 6 characters"});
    };

    // check if password are same

    // check if email and password are at least 6 chars long

    // check if user exists

    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    try{
        const savedUser = await user.save();
        res.json({success: true, user: savedUser});
    }catch(err){
        res.status(400).json({success: false, err: err});
    }
});

module.exports = router;