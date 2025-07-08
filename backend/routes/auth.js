const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
   const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(400).json({ error: err.message || 'Registration failed' });
  }
});


// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ error: info?.message || 'Invalid credentials' });

    req.login(user, (err) => {
      if (err) return next(err);
      res.json({ message: 'Logged in successfully', user });
    });
  })(req, res, next);
});


// Logout
router.post("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) return res.status(500).json({ error: "Logout failed" });

    req.session.destroy((err) => {
      if (err) return res.status(500).json({ error: "Failed to destroy session" });

      res.clearCookie("connect.sid"); // clear session cookie
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
});
// Check current session
router.get('/me', (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});
router.get('/me', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: 'Not logged in' });
  }
});
module.exports = router;
