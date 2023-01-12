import React from "react";
import Logo from "../../assets/logo.png";
import "./footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="left-side">
          <img src={Logo} alt="logo" />
          <h3>
            Fresh and delicious traditional
            <br />
            Bangladeshi food to delight the
            <br />
            whole family.
          </h3>
          <h2>Follow us</h2>
          <div className="icons">
            <a href="/">
              <BsFacebook className="icon" />
            </a>
            <a href="/">
              <BsInstagram className="icon" />
            </a>
            <a href="/">
              <BsTwitter className="icon" />
            </a>
          </div>
        </div>
        <div>
          <h1>Links</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Book Table</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Support</h1>
          <ul>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Support Center</a>
            </li>
            <li>
              <a href="/">Feedback</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Contact</h1>
          <ul>
            <li>
              <a href="/">+220909</a>
            </li>
            <li>
              <a href="/">example@example.com</a>
            </li>
            <li>
              <a href="/">Book Table</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
