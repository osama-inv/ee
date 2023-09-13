#!/usr/bin/node
// The User Model
const mongoose = require('mongoose')

const peopleSchema = new mongoose.Schema({
    id: Number,
    name: String,
  });


module.exports = mongoose.model('People', peopleSchema)
