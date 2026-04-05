import React from "react";
import "../components/Navbar.css";
import image from "../assets/FreshMart.jpg";
function About() {
  return (
    <div className="about-container">
      {/*Heading*/}
      <section className="about-header">
        <h1>About FreshMart</h1>
        <p>
          Your neighborhood grocery store committed to providing fresh, quality
          products since 2005.
        </p>
      </section>

    
      <section className="story-section">
        <div className="story-text">
          <h2>Our Store</h2>

          <p>
            FreshMart began with a simple idea: to create a grocery store that
            offers the freshest produce, highest quality meats, and finest
            selection of everyday essentials at fair prices.
          </p>

          <p>
            Founded in 2005 by the Johnson family, our first store opened in
            Grocery City with just 15 employees. Today, we've grown to 25
            locations across the state, but our commitment to quality and
            community remains unchanged.
          </p>

          <p>
            We work directly with local farmers and producers to bring you the
            best products while supporting our local economy.
          </p>
        </div>

        <div className="story-image">
                <img src={image} alt="FreshMart Store" />
          
        </div>
      </section>

      {/* Our values   */}
      <section className="values-section">
        <h2>Our Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>🌿 Freshness</h3>
            <p>
              We're committed to providing the freshest produce sourced locally
              whenever possible.
            </p>
          </div>

          <div className="value-card">
            <h3>🛍️ Quality</h3>
            <p>
              We carefully select every product to ensure the highest quality
              for our customers.
            </p>
          </div>

          <div className="value-card">
            <h3>❤️ Community</h3>
            <p>
              We're proud to support local farmers, producers, and community
              initiatives.
            </p>
          </div>

          <div className="value-card">
            <h3>🚚 Sustainability</h3>
            <p>
              We're committed to environmentally friendly practices and reducing
              our carbon footprint.
            </p>
          </div>
        </div>
      </section>

      {/*join family*/}
      <section className="join-section">
        <h2>Join the FreshMart Family</h2>

        <p>
          We're always looking for passionate individuals to join our team.
          Check out our current openings!
        </p>

        <button>View Career Opportunities</button>
      </section>
    </div>
  );
}

export default About;
