import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoWhiteImage from "../assets/logo-white.png";
import pages from "../../utils/pages";

const contacts = [
  {
    icon: faLocationDot,
    info: "1223 3rd Ave, New York, NY 10021, EUA",
    onClick:
      "https://www.google.com/maps/place/1223+3rd+Ave,+New+York,+NY+10021,+EUA/@40.7685475,-73.9619588,18z/data=!4m15!1m8!3m7!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2sNova+Iorque,+NY,+EUA!3b1!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2!3m5!1s0x89c258ea5d310c11:0x84c088ccae631006!8m2!3d40.7687946!4d-73.9610954!16s%2Fg%2F11b8vd35ww?entry=ttu",
  },
  { icon: faPhone, info: "(212) 999-1144", onClick: "tel:+1(212) 999-1144" },
  {
    icon: faEnvelope,
    info: "customer@littlelemon.com",
    onClick: "mailto:customer@littlelemon.com",
  },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faTwitter, name: "twitter" },
  { icon: faInstagram, name: "instagram" },
  { icon: faYoutube, name: "youtube" },
];

const navLinks = Array.from(pages.values()).filter((page) => page.anchorable);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img
          className="site-footer-logo"
          src={logoWhiteImage}
          alt="Little Lemon"
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <a href={contact.onClick} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                </a>
              </p>
            ))}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
