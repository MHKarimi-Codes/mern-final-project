
const mongoose = require('mongoose');

// appointment model
const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  service: { type: String, required: true },
  barber: { type: String, required: true }
});

module.exports = mongoose.model('Appointment', appointmentSchema);