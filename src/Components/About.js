import adrian from "../images/adrian.jpg";
import marioAdrian from "../images/marioAdrian.jpg";
import "./About.css";

function About() {
  return (
    <div className="about-section">
      <h1 className="title">Little Lemon</h1>
      <h2 className="about-subtitle">Chicago</h2>
      <p className="about-info">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequal sunt nostrud amet. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Vellt officia consequat duis
        enim velit mollit.
      </p>
      <img src={adrian} alt="Adrian the co-owner" className="adrian-img" />
      <img
        src={marioAdrian}
        alt="Adrian and Mario of Little Lemon"
        className="adrian-mario-img"
      />
    </div>
  );
}

export default About;
