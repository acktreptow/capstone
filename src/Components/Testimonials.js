import user1 from "../images/User1.png";
import user2 from "../images/User2.png";
import user3 from "../images/User3.png";
import user4 from "../images/User4.png";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonials() {
  return (
    <div className="testimonials">
      <h1 className="testimonial-title">What out customers say!</h1>
      <div>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <img src={user1} alt="first review" className="user-img" />
            <h2 className="user-name">Jane Doe</h2>
            <p className="user-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum.{" "}
            </p>
            <div className="user-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="testimonial-card">
            <img src={user1} alt="first review" className="user-img" />
            <h2 className="user-name">Jane Doe</h2>
            <p className="user-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum.{" "}
            </p>
            <div className="user-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="testimonial-card">
            <img src={user1} alt="first review" className="user-img" />
            <h2 className="user-name">Jane Doe</h2>
            <p className="user-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum.{" "}
            </p>
            <div className="user-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="testimonial-card">
            <img src={user1} alt="first review" className="user-img" />
            <h2 className="user-name">Jane Doe</h2>
            <p className="user-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum.{" "}
            </p>
            <div className="user-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
