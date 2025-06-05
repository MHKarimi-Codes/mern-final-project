

const express = require('express');
const router = express.Router();
const rcontrolers = require('../controlers/controlers.js');

// all CRUD routes
router.get('/', rcontrolers.getAppointments);
router.post('/', rcontrolers.createAppointment);
router.put('/:id', rcontrolers.updateAppointment);
router.delete('/:id', rcontrolers.deleteAppointment);

module.exports = router;
