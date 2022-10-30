const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create Student model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must be a valid email address']
    },
    thoughts: [{
    type: Schema.types.objectId, 
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.types.objectId, 
        ref:'User'
      }]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length
} )

const User = model('user', userSchema);

module.exports = User;
