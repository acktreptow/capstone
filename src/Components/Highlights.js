import greekSalad from "../assets/greekSalad.jpg";
import bruschetta from "../assets/bruschetta.svg";
import lemonDessert from "../assets/lemonDessert.jpg";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Highlights.css";

function Highlights() {
  return (
    <div className="highlights">
      <div className="highlights-section-top">
        <h1 className="title specials-title"> This weeks specials!</h1>
        <button className="menu-button">Online Menu</button>
      </div>
      <div>
        <div className="specials-container">
          <div className="specials-card">
            <img
              src={greekSalad}
              alt="greek salad"
              className="specials-image"
            />
            <div className="specials-title">
              <h3>Greek Salad</h3>
              <p className="price">$12.99</p>
            </div>
            <p className="specials-main">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="specials-bottom">
              <h4>Order for delivery</h4>
              <FontAwesomeIcon icon={faMotorcycle} className="faMotorcycle" />
            </div>
          </div>
          <div className="specials-card">
            <img src={bruschetta} alt="bruchetta" className="specials-image" />
            <div className="specials-title">
              <h3>Bruschetta</h3>
              <p className="price">$5.99</p>
            </div>
            <p className="specials-main">
              Our bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <div className="specials-bottom">
              <h4>Order for delivery</h4>
              <FontAwesomeIcon icon={faMotorcycle} className="faMotorcycle" />
            </div>
          </div>
          <div className="specials-card">
            <img
              src={lemonDessert}
              alt="greek salad"
              className="specials-image3"
            />
            <div className="specials-title">
              <h3>Lemon Dessert</h3>
              <p className="price">$5.00</p>
            </div>
            <p className="specials-main">
              This comes straight from grandma's recipe book, every last
              ingredient has been sources and is as authentic as can be
              imagined.
            </p>
            <div className="specials-bottom">
              <h4>Order for delivery</h4>
              <FontAwesomeIcon icon={faMotorcycle} className="faMotorcycle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
