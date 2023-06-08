import { Link } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import WrongPage from "../pages/Others/WrongPage";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/order-online">Order Online</Link>
        <Link to="/login">Login</Link>
      </nav>
    </>
  );
}

export default Nav;
