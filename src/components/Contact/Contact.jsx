import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contactContainer">
      <p>
        Follow us on our social media pages to join our community and engage
        with other like-minded individuals.
      </p>
      <p>You can find us on the following social media platforms:</p>
      <div className="socialMedia">
        <i className="fa-brands fa-facebook"></i>
        <p>Facebook: Beauty Cosmetics </p>
      </div>
      <div className="socialMedia">
        <i className="fa-brands fa-instagram"></i>
        <p>Instagram: Beauty Cosmetics </p>
      </div>
      <div className="socialMedia">
        <i className="fa-brands fa-twitter"></i>
        <p>Twitter: Beauty Cosmetics </p>
      </div>
      <div className="socialMedia">
        <i className="fa-brands fa-youtube"></i>
        <p>Youtube: Beauty Cosmetics </p>
      </div>

      <p>
        We love hearing from our customers and appreciate your support on social
        media. Follow us to stay in the loop on all things Beauty Cosmetics.
        <i className="fa-solid fa-heart"></i>
      </p>
    </div>
  );
};

export default Contact;
