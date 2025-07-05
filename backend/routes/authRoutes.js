const User = require('./models/User');

// Register
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ msg: 'User exists' });

  const newUser = new User({ email, password });
  await newUser.save();
  res.status(201).json({ msg: 'User registered' });
});

// Login
app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ msg: 'Logged in', user: req.user });
});

// Logout
app.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).json({ error: err });
    res.json({ msg: 'Logged out' });
  });
});

// Protected route
app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ msg: 'Welcome', user: req.user });
  }
  res.status(401).json({ msg: 'Unauthorized' });
});
