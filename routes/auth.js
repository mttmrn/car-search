const router = require('express').Router();
const User = require('../model/User')

router.post('/register', async (req, res) => {
    // check if fields are empty
    const email = 'kuzma031@yahoo.com'
          password = req.body.password,
          confirmPass = req.body.confirmPass;

    if(email === '' || password === '' || confirmPass === '') {
        return res.json({success: false, message: 'You must fill all fields'});
    } ;

    // check if password are same
    if (password !== confirmPass) {
        return res.json({success: false, message: 'Passwords must match'});
    };

    // check if email and password are at least 6 chars long
    if (email.length <= 6 || password.length <= 6) {
        return res.json({success:false, message: "Email and password must be greater than 6 characters"});
    };

    // check if user exists

    try {
        const findUser = await User.find({email:email});

        if(findUser.length > 0 ) { // we have user
            return res.json({success: false, message: 'User with that email already exists'});
        }

        const user = new User({
            email: req.body.email,
            password: req.body.password 
        });

        const savedUser = await user.save();

        res.json({success: true, user: savedUser});

    } catch(err) {
        res.status(400).json({success: false, err: err}); 
    }
    
});

module.exports = router;
