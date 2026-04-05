import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-section">
          <h2 className="logo">FreshMart</h2>
          <p>
            Your one-stop shop for fresh groceries delivered to your doorstep.
          </p>

          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Mallapur,hyderabad</p>
          <p>Phone: 9347866684</p>
          <p>Email: freshmart@gmail.com</p>
          <p>Pincode: 500076</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        © 2026 FreshMart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
