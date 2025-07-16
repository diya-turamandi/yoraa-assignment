import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo2">
          <img src="/assets/images/Icon (1).png" alt="Yoraa Logo" />
        </div>
        <div className="footer-section">
          <p>Subscribe to indulge in the exclusive updates and events.</p>
          <div className="subscribe">
            <input type="email" placeholder="enter your email..." />
            <button>JOIN</button>
          </div>
          <small>contact@yoraa.in</small>
        </div>
        <div className="footer-section">
          <h4>BRAND</h4>
          <div className="foot">
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>CLIENT SERVICES</h4>
          <a href="#">Refund And Cancel Policy</a>
          <a href="#">Payment Policy</a>
          <a href="#">Shipping And Delivery Policy</a>
          <a href="#">FAQs</a>
          <a href="#">Track Order</a>
          <a href="#">Delete Account</a>
        </div>
      </div>
      <hr />
      <div className="copyright">
        © 2025 YORAA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
