const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');
const { getThoughts } = require('./userController');

// Aggregate function to get the number of students overall
const thoughtController = {
  
