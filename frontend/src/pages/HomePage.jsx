import React, { useRef } from 'react'
import '../style/HomePage.css'
import Appointment from './Appointment';
import Services from './Services';
import Contact from './Contact';

const HomePage = () => {

    // scroll down when the user click on the "book" button
    const appointmentRef = useRef(null);
    const scrollToAppointment = () => {
        appointmentRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* the firs home page that a user can see */}
            <div className="home-container">
                <div className="home-content">
                    <h1>Welcome to Dodge Park Barbershop</h1>
                    <p>Your style, our passion.</p>
                    <button className="cta-button" onClick={scrollToAppointment}>Book an Appointment</button>
                </div>
            </div>

            {/* appointment page to make an appointment */}
            <div ref={appointmentRef} id='appointment'>
                <Appointment />
            </div>

            {/* service page that give information about the services */}
            <div id='services'>
                <Services />
            </div>

            {/* contact page that diplay contact informatin */}
            <div id='contact'>
                <Contact />
            </div>
        </>
    );
}

export default HomePage

