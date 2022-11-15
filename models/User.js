const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "must be in a valid email format",
    ],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
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

userSchema.virtual('friendCount').get(() => {
    return this.friends.length;
});

const User = model('User', userSchema)

module.exports = User;