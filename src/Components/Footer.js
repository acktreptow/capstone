import logoWhite from "../assets/logo-white.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logoWhite} alt="white logo" className="logo-white" />
        <div className="navigation">
          <h1>Navigation</h1>
          <a href="placeholder.com">Home</a>
          <a href="placeholder.com">About</a>
          <a href="placeholder.com">Menu</a>
          <a href="placeholder.com">Reservations</a>
          <a href="placeholder.com">Order Online</a>
          <a href="placeholder.com">Login</a>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <a href="placeholder.com">Address</a>
          <a href="placeholder.com">Phone Number</a>
          <a href="placeholder.com">Email</a>
        </div>
        <div className="social-media">
          <h1>Social Media</h1>
          <a href="placeholder.com">Facebook</a>
          <a href="placeholder.com">Instagram</a>
          <a href="placeholder.com">Twitter</a>
          <a href="placeholder.com">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
