//require Express router
const router = require('express').Router();

// set user and thought routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add /users, and /thoughts to created routes 
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// export router module
module.exports = router;