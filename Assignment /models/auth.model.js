const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, //name required
  },
  email: {
    type: String, //email required
    required: true,
    unique: true, // should be unique
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);