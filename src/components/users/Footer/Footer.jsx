import React from "react";
import "./footer.css";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h2>¡ Síguenos !</h2>
      <h3>Te mantendremos a la vanguardia urbana.</h3>
      <hr></hr>
      <div>
        <Link to="www.facebook.com">
          <AiOutlineFacebook className="iconsSM" />
        </Link>
        <Link to="www.twitter.com">
          <FiTwitter className="iconsSM" />
        </Link>
        <Link to="www.instagram.com">
          <FiInstagram className="iconsSM" />
        </Link>
        <Link to="www.linkedin.com">
          <AiOutlineLinkedin className="iconsSM" />
        </Link>
      </div>
      <hr></hr>
      <h5>Desarrollado por FraternidadJS</h5>
      <hr></hr>
    </div>
  );
};

export default Footer;
