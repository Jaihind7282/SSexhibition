import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <h5>SS EVENTS AND EXHIBITION</h5>
          <p>we provide events and exhibition</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: marketing@ssexhibition.in</li>
            <li>Email: sales@ssexhibition.in</li>
            <li>Phone: (+91) - 6205109235</li>
            <li>
              Address: Gf. 92 Ansal Plaza 2, Chiranjeev vihar, Ghaziabad, 201002
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 SS EVENTS & EXHIBITION. All Rights Reserved.</p>
        <a
          href="https://maps.app.goo.gl/AQAvt46jH9AfDBU58?g_st=com.google.maps.preview.copy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by @im_ JAI SINGH
        </a>
      </div>
    </footer>
  );
};

export default Footer;
