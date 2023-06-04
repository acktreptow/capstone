import bread from "../assets/restaurantfood.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1 className="title">Little Lemon</h1>
      <h2 className="subtitle">Chicago</h2>
      <p className="info">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <button className="reserve-button">Reserve a table</button>
      <img src={bread} alt="bread" className="hero-img" />
    </div>
  );
}

export default Hero;
