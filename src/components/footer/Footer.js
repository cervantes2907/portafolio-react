import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Ubaldo cervantes</h1>
        <p>Medellin Colombia</p>
      </div>
      <div className="footer-contact">
        <h3> Contactame</h3>
        <p> Me gustaria trabajar contigo en tu proximo proyecto </p>
      </div>
      <div className="footer-sns">
        <div className="design-by"> Diseños totalmente resposive</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/ubaldo-cervantes-rios-b06197216/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/UbaldoCervante7" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100063592819719" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;