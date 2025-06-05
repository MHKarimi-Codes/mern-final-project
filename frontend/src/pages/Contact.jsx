
import React from 'react'
import '../style/Contact.css'
import mapImage from '../assets/map.png'

const Contact = () => {
    return (
        <>
        <div className='contact-root'>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Reach out through the contact number below<br/> or find us on social media.</p>

            <div className="contact-info">
                <p><strong>Email:</strong> info@fademaster.com</p>
                <p><strong>Phone:</strong> +1 (301) 773-2855</p>
                <p><strong>Address:</strong> 7762 Landover Rd, Hyattsville, MD 20785</p>
            </div>
        </div>
        <a href='https://maps.app.goo.gl/QZ5HLf8tDBnc8GtV8' target='_blank'>
        <img src={mapImage} alt='FadeMaster Location'/>
        </a>
        </>
    )
}

export default Contact
