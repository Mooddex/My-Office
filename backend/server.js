const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require('passport');
const authRoutes = require('./routes/auth');


require('dotenv').config();
require('./config/passport')(passport);

const app = express();
// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


app.use(express.json());


// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    httpOnly: true,
    secure: false,     // true if using HTTPS
    sameSite: "lax",   // must be lax or none
  }
}));
// Passport init
app.use(passport.initialize());
app.use(passport.session());
// Routes
app.use('/auth', authRoutes);
const isAuthenticated = require('./middleware/isAuthenticated');
app.get('/login', isAuthenticated, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
const clientRoutes = require('./routes/clientRoutes');
app.use('/api/clients', clientRoutes);



// Test route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start server
const PORT = process.env.PORT || 2121;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
//---------------------------------------

