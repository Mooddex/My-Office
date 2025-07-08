const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' }, // <-- change here
      async (email, password, done) => {
        try {
          console.log('🔐 Login attempt with email:', email);
          const user = await User.findOne({ email });
          if (!user) {
            console.log('❌ User not found');
            return done(null, false, { message: 'User not found' });
          }

          const isMatch = await user.isValidPassword(password);
          if (!isMatch) {
            console.log('❌ Invalid password');
            return done(null, false, { message: 'Incorrect password' });
          }

          console.log('✅ Login success');
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};
