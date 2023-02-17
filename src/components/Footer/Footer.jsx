import "./footer.css";
import React, { useState } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
const Footer = () => {
  const [trackOrderNumber, setTrackOrderValue] = useState("");
  return (
    <div className="Footer">
      <div className="footer-data">
        <div className="trackOrder">
          <input
            type="text"
            placeholder="Track your order"
            name="trackOrder"
            value={trackOrderNumber}
            onChange={(e) => setTrackOrderValue(e.target.value.trim())}
          />
          <ButtonPrimary textButton="track" pathLink={`/order/${trackOrderNumber}`}/>
        </div>
        <div className="contact-footer">
          <p>Contact us</p>
          <div className="beautySocialMedia">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="myData">
        <p>Página desarrollada por Natalia Vega</p>
        <div className="mySocialMedia">
          <a href="https://github.com/nataliavega98" target={"_blank"}>
            <i className="fa-brands fa-github"></i> Github
          </a>
          <a
            href="https://www.linkedin.com/in/natalia-camila-vega-74783b228/"
            target={"_blank"}
          >
            <i className="fa-brands fa-linkedin"></i> Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
