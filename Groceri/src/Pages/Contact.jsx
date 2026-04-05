import React from "react";
import "../components/Navbar.css";

function Contact() {
  return (
    <div className="contact-container">

      {/* Left form */}
      <div className="contact-card">
        <h2>Contact Freshmart</h2>
        <p className="subtitle">We would love to hear from you!</p>

        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />

          <label>Email</label>
          <input type="email" placeholder="Your Email" />

          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Right form */}
      <div className="contact-card info">
        <h2>Contact Information</h2>

        <div className="info-item">
          <h4> Phone</h4>
          <p>91+9347866684</p>
          <p>888-9999-888 (Customer Service)</p>
        </div>

        <div className="info-item">
          <h4> Email</h4>
          <p>kummariramakrishna735@gmail.com</p>
          <p>freshmart@gmail.com (Store)</p>
        </div>

        <div className="info-item">
          <h4> Address</h4>
          <p>New Narsimha Nagar,Mallapur</p>
          <p>Hyderabad,500076</p>
        </div>

        <div className="info-item">
          <h4> Store Hours</h4>
          <p>Mon-Fri: 7:00 AM — 9:00 PM</p>
          <p>Sat: 8:00 AM — 8:00 PM</p>
          <p>Sun: 9:00 AM — 6:00 PM</p>
        </div>
      </div>

    </div>
  );
}

export default Contact;
