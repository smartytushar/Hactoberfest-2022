import React from "react";
import "./footer.css";
import Twitter from "./Logos/twitter.png";
import Facebook from "./Logos/facebook.png";
import Instagram from "./Logos/instagram.jpeg";
import Linkedin from "./Logos/linkedin.jpeg";
import GooglePlay from "./Logos/playstore.png";
import MasterCard from "./Logos/mastercard.svg";
import Visa from "./Logos/visa.svg";
import AmazonPay from "./Logos/amazonpay.svg";
import Airtel from "./Logos/airtel.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <hr />
        <div className="container">
          <div className="foot-text">
            <div>
              <h5>Know Us</h5>
              <hr />
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Career</li>
                <li>FAQ</li>
                <li>MedFem</li>
              </ul>
            </div>

            <div>
              <h5>Our Policies</h5>
              <hr />
              <ul>
                <li>Privacy Policiy</li>
                <li>Refund Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            <div>
              <h5>Our Services</h5>
              <hr />
              <ul>
                <li>Order Medicines</li>
                <li>Book Lab Test</li>
                <li>Healthcare Products</li>
                <li>Surgeries</li>
                <li>Wellness</li>
                <li>Ayurveda</li>
                <li>Consult a Doctor</li>
                <li>Medical Tourism</li>
                <li>Medfem</li>
              </ul>
            </div>
          </div>
          <div className="foot-content">
            <div className="foot-top">
              <div className="logo-content">
                <div>
                  {" "}
                  <p>Follow Us</p>{" "}
                </div>
                <div className="social-logo">
                  <img src={Instagram} alt="" />
                  <img src={Facebook} alt="" />
                  <img src={Twitter} alt="" />
                  <img src={Linkedin} alt="" />
                </div>
              </div>

              <div className="download-app">
                <div>
                  <p>Download the App for Free</p>
                  <img src={GooglePlay} alt="" />
                </div>
              </div>
            </div>
            <div className="newsletter">
              <div>Subscribe To Our newsletter</div>
              <input type="text" placeholder="Type Your Email Id" />
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="payment-methods">
          <img src={AmazonPay} alt="" />
          <img src={Airtel} alt="" />
          <img src={Visa} alt="" />
          <img src={MasterCard} alt="" />
        </div>
        <div className="end-copyright">
          IN COMPLIANCE WITH DRUGS AND COSMETICS ACT, 1940 AND DRUGS AND
          COSMETICS RULES, 1945, WE DON'T PROCESS REQUESTS FOR SCHEDULE X AND
          OTHER HABIT-FORMING DRUGS.
        </div>
        <div className="end-copyright1">
          © 2013-22 <span>MEDLIFE PHARMACITICALS</span>. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </>
  );
}
export default Footer;
