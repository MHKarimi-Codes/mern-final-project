
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../style/AppointmentPage.css';

const Appointment = () => {

  // declaring all useState variables
  const [appointments, setAppointments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    service: '',
    barber: '',
  });

  // useEffect that execute when the first time page load
  useEffect(() => {
    fetchAppointments();

    if (window.location.hash === '#booking') {
      setTimeout(() => {
        bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

  }, [])

  // fetch all appointments via axios
  const fetchAppointments = async () => {
    await axios.get('http://localhost:5000/appointment').then((response) => {
      setAppointments(response.data)
    }).catch((error) => {
      console.error("can not fetch appointments from the server", error);
    })
  }

  // handleSubmit first evaluate if the submit request has an Id or not
  // if it has an id then is is an update request
  // if it does not have an id then it is a create request.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/appointment/${editingId}`, formData);
        alert("Appointment Editted Successfully!")
      } else {
        await axios.post('http://localhost:5000/appointment', formData);
        alert("Appointment Saved Successfully!")
      }

      // update the useState with the new data.
      setFormData({ name: '', date: '', time: '', service: '', barber: '' });
      setEditingId(null);
      fetchAppointments();
    } catch (error) {
      console.error("Failed to submit appointment", error);
    }
  };

  // get an Id and delete the record
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/appointment/${id}`);
      alert("You have successfully deleted the appointment")
      fetchAppointments();
    } catch (error) {
      console.error("Failed to delete appointment", error);
    }
  };

  // extract new data from input fields, assign to the useState variable
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // by clicking the Edit button  pass the id
  // pass data to the FormData to the input fields
  const handleEdit = (appt) => {
    setFormData({
      name: appt.name,
      date: appt.date,
      time: appt.time,
      service: appt.service,
      barber: appt.barber,
    });
    setEditingId(appt._id);
  };


  return (
    <div className="appointment-page">
      <h2>Book an Appointment</h2>

      <form onSubmit={handleSubmit} className="appointment-form">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Customer Name" required />
        <input name="date" type="date" value={formData.date} onChange={handleChange} required />
        <input name="time" type="time" value={formData.time} onChange={handleChange} required />
        <input name="service" value={formData.service} onChange={handleChange} placeholder="Service" required />
        <input name="barber" value={formData.barber} onChange={handleChange} placeholder="Barber Name" required />
        <button type="submit">{editingId ? 'Update' : 'Book'}</button>
      </form>

      <h3>Scheduled Appointments</h3>
      <ul className="appointment-list">
        {appointments.map((appt) => (
          <li key={appt._id}>
            <strong>{appt.name}</strong> - {appt.date} at {appt.time} | {appt.service} with {appt.barber}
            <button onClick={() => handleEdit(appt)}>Edit</button>
            <button onClick={() => handleDelete(appt._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointment
