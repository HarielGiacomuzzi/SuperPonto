'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var mailRegex = [ /^a/, 'This e-mail address seems to be invalid !' ]

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  constraints: {
    maxDailyHours: Number,
    minDailyHours: Number,
    minRestTime: Number
  },
  lastLogin_at: Date,
  created_at: Date
})

userSchema.virtual('name.full').get(() => {
  return this.firstName + ' ' + this.lastName
})

var User = mongoose.model('User', userSchema)

module.exports = User
