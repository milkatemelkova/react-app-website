import React from "react";

function About(props) {
  return (
    <div id="about">
      <div id="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim
          aliquid praesentium rerum nisi at, distinctio placeat! Dicta, animi
          minus!
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;
