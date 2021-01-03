import React from "react";
import FeaturedStories from "./FeaturedStories";
import Counter from "../features/counter/Counter";
import "../assets/stylesheets/LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <FeaturedStories />
      <br />
      React/Redux Counter Component
      <Counter />
    </div>
  );
};

export default LandingPage;
