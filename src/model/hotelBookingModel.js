const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  room: {
    type: String,
    required: true,
    enum: ['Single', 'Double']
  },
  nights: {
    type: Number,
    required: true,
    min:1
  },
  petAllowed: {
    type: Boolean,
    default: false
  },
  localId: {
    type: String,
    required: true
  },
  maritalStatus: {
    type: String,
    requried: true,
    enum: ['Single','Married']
  },
  alcoholAllowed: {
    type: Boolean,
    default: false
  },
  bachelorAllowed: {
    type: Boolean,
    default: false
  }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
