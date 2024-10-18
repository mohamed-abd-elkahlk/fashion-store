const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "first name required !"],
  },
  last_name: {
    type: String,
    required: [true, "last name required !"],
  },
  email: {
    type: String,
    required: [true, "email name required !"],
  },
  password: {
    type: String,
  },

  passwordChangedAt: Date,

  passwordResetCode: String,

  passwordResetExpires: Date,

  passwordResetVerified: Boolean,

  isVarvaid: {
    type: Boolean,
    default: false,
  },

  active: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  avatar: {
    type: String,
  },
});

// UserSchema.pre("save", function (next) {
//   if (!this.isModified("password")) return next();
//   const password = genPasswordHash(this.password);
//   this.password = password.hashedPassword;
//   this.salt = password.salt;

//   next();
// });

const User = mongoose.model("user", UserSchema);
module.exports = User;
