import React from "react";
import "../Css/Footer.css";

const Footer = () => {
  return(
    <>
      <div className="footer">
        <div className="contact">
          <div className="logo"><img src="./images/logofooter.svg" alt="" /></div>
          <div className="contact-logos">
            <span><img src="./images/icon-instagram.svg" alt="" /></span>
            <span><img src="./images/icon-pinterest.svg" alt="" /></span>
            <span><img src="./images/icon-twitter.svg" alt="" /></span>
            <span><img src="./images/icon-youtube.svg" alt="" /></span>
            <span><img src="./images/icon-facebook.svg" alt="" /></span>
          </div>
        </div>
        <div className="footer-nav">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support </a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="rights">
          <button className="btn">Request Invite</button>
          <p className="muted-text">© Easybank.All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};
export default Footer;