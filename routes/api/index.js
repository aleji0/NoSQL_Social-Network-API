//require xxpress router
const router = require('express').Router();

// set user and thought routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add '/users' and '/thoughts' 
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// export router module
module.exports = router;