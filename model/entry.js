'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectID = Schema.ObjectId
var User = require('./user')

var userEntry = new Schema({
  date: Date,
  user: { type: ObjectID, ref: 'User' },
  updated_at: Date,
  created_at: Date
})

userEntry.pre('save', (next) => {
  let date = new Date()
  if (!this.created_at) {
    this.created_at = date
  }

  this.updated_at = date

  next()
})

var UserEntry = mongoose.model('UserEntry', userEntry)

module.exports = UserEntry
