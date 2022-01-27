import React from "react";
import "./Footer.css";
import logo from "../../images/2.-Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left text-light">
        <img className="footer-logo  " alt="logo" src={logo} />
        <h3>
          About<span>Travel</span>
        </h3>
        <p className="footer-links">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/blog" className="footer-link">
            Blog
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </p>
        <p className="footer-company-name">© 2022 Travel Experience Blog</p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>
              2361 - Madinath Sultan Qaboss,
              <br /> Opposite Fatema Azhurah Mosque
            </span>
            Muscat, OMAN
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+968 93554255</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@eduonix.com">support@travel.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Thanks to our 412,000 employees, Travel Blog provides catering,
          facilities management, employee benefits and personal home services to
          100 million consumers daily in 56 countries.{" "}
        </p>
        <div className="footer-icons">
          <a href="https://www.facebook.com/thopu.ahamed32/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.facebook.com/thopu.ahamed32/">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/thopu.ahamed32/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/tofazzal-k-829241227/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/groups/scic4">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
