const { Schema, model } = require('mongoose');
const userSchema = require('./User');

// Schema to create Student model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must be a valid email address']
    },
    thoughts: [
      {
      type: Schema.types.objectId, 
      ref: 'Thought'
    },
    ],
    friends: [
      {
        type: Schema.types.objectId, 
        ref:'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
