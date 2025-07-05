const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();
require('./config/passport')(passport); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'secret', 
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    secret: 'secret', 
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

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

