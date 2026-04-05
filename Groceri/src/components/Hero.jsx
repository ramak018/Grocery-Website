import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/Hero1.png";
import "./Navbar.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Left content */}
      <div className="hero-text">
        <h1>
          Fresh <span>Groceries</span> Delivered
        </h1>

        <h2>to Your Door</h2>

        <p>
          Shop from our wide selection of fresh fruits, vegetables, dairy, and
          more. Get same-day delivery!
        </p>

        <div className="hero-buttons">
          <Link to="/Shop">
            <button className="shop">Shop Now</button>
          </Link>
          <Link to="/About">
            <button className="shop">Learn More</button>
          </Link>
        </div>
      </div>

      {/* right image */}
      <div className="hero-image">
        <img src={HeroImg} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
