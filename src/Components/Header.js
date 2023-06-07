import logo from "../assets/logo.svg";
import Nav from "./Nav";
import "./Header.css";

function Header() {
  return (
    <header className='header-container'>
      <img src={logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
}

export default Header;
