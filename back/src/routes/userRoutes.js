const express = require('express');
const router = express.Router();
const User = require('../models/users');

// Example route to create a new user
router.post('/create', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
});

module.exports = router;
