import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Launch Your App</span> With Confidence and Creativity
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod
          quam veniam.
        </p>
        <a href="#" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
}

export default Header;
