
const Appointment = require('../model/model.js');

// get appointments from the database
exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
};

// create or send data to the database
// create or save appointments
exports.createAppointment = async (req, res) => {
  const newAppt = new Appointment(req.body);
  const saved = await newAppt.save();
  res.json(saved);
};

// update appointments based on the id
exports.updateAppointment = async (req, res) => {
  const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// delete an appointment based on the id
exports.deleteAppointment = async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};
