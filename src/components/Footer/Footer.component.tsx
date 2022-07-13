import React, { FC } from "react";
import "./Footer.style.scss";
import logoImg from "../../assets/svg/logoBlue.svg";
import facebookLogo from "../../assets/svg/facebook.svg";
import twitterLogo from "../../assets/svg/twitter.svg";
import instagramLogo from "../../assets/svg/instagram.svg";
import youtubeLogo from "../../assets/svg/youtube.svg";
import messageImg from "../../assets/svg/24hrsresponse.svg";
import phoneImg from "../../assets/svg/phone.svg";
import locationImg from "../../assets/svg/location.svg";

type Props = {};

const Footer: FC = (props: Props) => {
  return (
    <section id="footer">
      <div className="socials-container">
        <img src={logoImg} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus,
          habitasse luctus varius et in at nullam justo.
        </p>
        <div className="socials">
          <a href="/">
            <img src={facebookLogo} alt="facebook logo" />
          </a>
          <a href="/">
            <img src={twitterLogo} alt="twitter logo" />
          </a>
          <a href="/">
            <img src={instagramLogo} alt="instagram logo" />
          </a>
          <a href="/">
            <img src={youtubeLogo} alt="youtube logo" />
          </a>
        </div>
      </div>
      <div className="info-container">
        <div className="product">
          <h4>Product</h4>
          <a href="/">Feature </a>
          <a href="/">Price </a>
          <a href="/">Enterprice </a>
          <a href="/">Integration </a>
        </div>
        <div className="company">
          <h4>Company</h4>
          <a href="/">About Us</a>
          <a href="/">Customers </a>
          <a href="/">News </a>
          <a href="/">Careers </a>
        </div>
        <div className="resources">
          <h4>Resources</h4>
          <a href="/">Guide</a>
          <a href="/">Community </a>
          <a href="/">Accessibility </a>
        </div>
      </div>
      <div className="contact-us">
        <h4>Contact Us</h4>
        <div>
          <img src={messageImg} alt=" email address" />
          <div>
            <span>Email Address</span>
            <span>hello@ttrack.com</span>
          </div>
        </div>
        <div>
          <img src={phoneImg} alt="phone number" />
          <div>
            <span>Call Us</span>
            <span>(505) 555-0125</span>
          </div>
        </div>
        <div>
          <img src={locationImg} alt="address" />
          <div>
            <span>Address</span>
            <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
          </div>
        </div>
      </div>
      {/* <div className="copyright">
        Copyright 2022 All right reserve Ttrack.com
      </div> */}
    </section>
  );
};

export default Footer;
