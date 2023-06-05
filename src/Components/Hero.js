import bread from "../assets/restaurant-food.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Little Lemon</h1>
      <h2 className="hero-subtitle">Chicago</h2>
      <p className="hero-info">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <button className="hero-button">Reserve a table</button>
      <img src={bread} alt="bread" className="hero-img" />
    </div>
  );
}

export default Hero;