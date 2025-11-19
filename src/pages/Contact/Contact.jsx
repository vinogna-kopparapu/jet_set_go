import React, { useState } from 'react';
import './Contact.css';
import SkipLink from '../../Components/SkipLink';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.address || !formData.phoneNumber || !formData.message) {
      alert('Please fill in all fields');
    } else {
      
      console.log('Form submitted:', formData);
      
    }
  };

  return (
    <div className="contact-container">
      <SkipLink targetId="main-content" text="Skip to main content" />

      <h1 id="main-content">How To Find Us</h1>
      <p>Have questions about our services or need assistance with your Travel? We're here to help! Feel free to reach out to our friendly team for personalized assistance.</p>
      <div className="contact-info">
        <p>Email: client@jetsetgo.com </p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
        <p>Operating Hours:
          Monday - Friday: 9:00 AM - 6:00 PM,
          Saturday: 10:00 AM - 4:00 PM,
          Sunday: Closed.</p>
      </div>
      <h2>Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} />
        <input type="text" name="phoneNumber" placeholder="Your Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
