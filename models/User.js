const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
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
      type: Schema.types.ObjectId, 
      ref: 'Thought'
    },
    ],
    friends: [
      {
       type: Schema.types.ObjectId, 
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
