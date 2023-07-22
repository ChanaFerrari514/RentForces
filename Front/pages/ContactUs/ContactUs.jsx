import React from 'react';
import NavbarBottom from '../../src/components/Navbar/NavbarBottom';
import './ContactUs.css';

const ContactUs = () => {

    return (
        <div className="container">
            <NavbarBottom />

        <h1>Contact - Rent Forces</h1>
        <p>If you have any questions or inquiries, please feel free to contact us at:</p>
        <strong>Email:info@rentyourhome.com</strong>
        <p>Thank you for reaching out to us! We have received your message and will get back to you shortly.</p>
        </div>
    );
}

export default ContactUs;