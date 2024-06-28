import { Link } from "react-router-dom";
import restaurantFoodImage from "../assets/image1.jpg";
import "./Hero.css";
import pages from "../../../utils/pages";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>New York</h2>
          <p>
            We are a family-run seafood restaurant, blending classic recipes
            with contemporary flair.
          </p>
          <Link className="button-primary" to={pages.get("bookings").path}>
            Reserve a table
          </Link>
        </div>
        <img
          className="hero-image"
          src={restaurantFoodImage}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};

export default Hero;
