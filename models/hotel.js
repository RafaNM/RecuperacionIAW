const mongoose = require('mongoose')
Schema = mongoose.Schema;


var scheduleSchema = new mongoose.Schema({
  Monday: { type: String },
  Tuesday: { type: String },
  Wednesday: { type: String },
  Thursday: { type: String },
  Friday: { type: String },
  Saturday: { type: String },
  Sunday: { type: String }
});

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: 1, 
  },
  stars: {
    type: Number,
    enum: [1, 2, 3, 4, 5]
  },
  price: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7]
  },
  prating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1
  },
  phone: {
    type: Number,
  },
  email: {
    type: String
  },
  schedule: {
    type: [scheduleSchema]
  },
  web: {
    type: String
  },
  rooms: {
    type: [String]
  },
  type: {
    type: String
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('hotel', hotelSchema)