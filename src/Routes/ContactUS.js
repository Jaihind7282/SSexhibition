import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import the location icon
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <>
      <div className="contact-details-container">
        <h1>Contact Details</h1>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <div className="contact-text">
            <h3>Phone Number</h3>
            <p>(+91) 6205109235</p>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div className="contact-text">
            <h3>Email Address 1</h3>
            <p>sales@ssexhibition.in</p>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div className="contact-text">
            <h3>Email Address 2</h3>
            <p>marketing@ssexhibition.in</p>
          </div>
        </div>
      </div>
      <div className="contact-us-container">
        <div className="contact-content">
          <div className="address-column">
            <div className="address-row">
              <div className="address-section shop-address">
                <h2 className="address-title">
                  <FaMapMarkerAlt className="location-icon" /> Shop Address
                </h2>
                <p className="address-text">
                  Shop no 1, 2 Plot no 56, 57 Simran Appartment Vallabh Nagar,
                  Lalghati Bhopal
                </p>
              </div>

              <div className="address-section office-address">
                <h2 className="address-title">
                  <FaMapMarkerAlt className="location-icon" /> Office Address
                </h2>
                <p className="address-text">
                  GF. 92 Ansal Plaza 2, Chiranjeev Vihar, Ghaziabad 201002
                </p>
              </div>
            </div>

            <div className="address-row">
              <div className="address-section warehouse-address">
                <h2 className="address-title">
                  <FaMapMarkerAlt className="location-icon" /> Warehouse Address
                </h2>
                <p className="address-text">
                  Chaman House, Vishnu Enclave, Gangapuram, Ghaziabad 201002
                </p>
              </div>

              <div className="address-section other-location-address">
                <h2 className="address-title">
                  <FaMapMarkerAlt className="location-icon" /> Other Location
                </h2>
                <p className="address-text">
                  268 Patel Nagar, Near Kamta Chauraha, Lucknow
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-column">
            <h2 className="contact-form-title">Get in Touch</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
