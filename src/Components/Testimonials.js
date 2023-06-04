import user1 from "../assets/User1.png";
import user2 from "../assets/User2.png";
import user3 from "../assets/User3.png";
import user4 from "../assets/User4.png";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials">
      <h1 className="testimonial-title">What our customers say!</h1>
      <div>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <img src={user1} alt="first review" className="user-img" />
            <h2 className="user-name">Jane Doe</h2>
            <p className="user-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum.Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare.
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
            <img src={user2} alt="first review" className="user-img" />
            <h2 className="user-name">John Doe</h2>
            <p className="user-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum.Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare.
            </p>
            <div className="user-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="testimonial-card">
            <img src={user3} alt="first review" className="user-img" />
            <h2 className="user-name">Sara Lopez</h2>
            <p className="user-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum.Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare.
            </p>
            <div className="user-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
          </div>
          <div className="testimonial-card">
            <img src={user4} alt="first review" className="user-img" />
            <h2 className="user-name">Adam Duong</h2>
            <p className="user-text">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum.Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare.
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
