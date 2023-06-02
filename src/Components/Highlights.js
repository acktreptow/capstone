import salad from "../images/greek salad.jpg";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <img src={salad} alt="greek salad" className="specials-image" />
            <div className="specials-title">
              <h3>Greek Salad</h3>
              <p>$12.99</p>
            </div>
            <p className="specials-main">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="specials-bottom">
              <h4>Order for delivery</h4>
              <FontAwesomeIcon icon={faMotorcycle} />
            </div>
          </div>
          <div className="specials-card">
            <img src={salad} alt="greek salad" className="specials-image" />
            <div className="specials-title">
              <h3>Greek Salad</h3>
              <p>$12.99</p>
            </div>
            <p className="specials-main">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="specials-bottom">
              <h4>Order for delivery</h4>
              <FontAwesomeIcon icon={faMotorcycle} />
            </div>
          </div>
          <div className="specials-card">
            <img src={salad} alt="greek salad" className="specials-image" />
            <div className="specials-title">
              <h3>Greek Salad</h3>
              <p>$12.99</p>
            </div>
            <p className="specials-main">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="specials-bottom">
              <h4>Order for delivery</h4>
              <FontAwesomeIcon icon={faMotorcycle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
