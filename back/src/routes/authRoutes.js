const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users'); // Assuming you have the User model in a models folder
const router = express.Router();

// Secret key for JWT (this should be stored in an environment variable in production)
const JWT_SECRET = 'your_jwt_secret_key';

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({email})

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    if (password !== user.password) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Create and sign the JWT
    const payload = {
      user: {
        id: user._id,
        email: user.email
      },
    };
    const first_name= user.first_name
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    // Send the token back to the client
    res.json({ success: true, token , email ,first_name });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const newUser = new User({ first_name, last_name, email, password });
    await newUser.save();

        // Create and sign the JWT
    const payload = {
      user: {
        id: newUser._id,
        email: newUser.email
      },
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ success: true , token, message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
});

router.post('/phoneLogin', async (req, res) => {
  try {
    const{ phone_number , methode} = req.body
    const user = await User.findOne({phone_number})
    if(user){
      console.log(user.activation_code)
      res.status(200).json({ success: true , message: 'User was in db before' , userWasInDb: true});

    } else {
      const activation_code = Math.floor(100000 + Math.random() * 900000);
      const newUser = new User({phone_number, activation_code});
      await newUser.save()
      res.status(200).json({success: true, message: 'User created successfully', newUser});
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({message:'error'})
  }
})

router.post('/activationCode', async (req, res) => {
  try {
    const{ phone_number , activation_code} = req.body
    console.log(phone_number, activation_code)
    const user = await User.findOne({phone_number})
    if(activation_code === user.activation_code.toString()){
      const payload = {
        user: {
          id: user._id,
          phone_number: user.phone_number
        },
      };

      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ success: true ,token, message: 'user activated successfully', user: user});
    } else {
      res.status(400).json({success: false, message: 'activation code is not correct'});
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({message:'error'})
  }
})

router.post('/setInformation', async (req, res) => {
  try {
    const{phone_number, first_name, last_name, email, password} = req.body
    console.log(phone_number, first_name, last_name, email, password)
    const user = await User.findOne({phone_number})
    if (!user) {
      return res.status(400).json({success: false, message: 'User does not exist'});
    }
    await User.findByIdAndUpdate(
      user._id,
      { first_name, last_name, email, password },
      { new: true } // This option returns the updated document
    );
    return res.status(200).json({ success: true, message: 'User information updated',
      first_name: user.first_name, last_name: user.last_name, email: user.email});
  } catch (error) {
    console.log(error)
    res.status(400).json({message:'error'})
  }
})



module.exports = router;
