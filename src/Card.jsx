import React, { useState } from "react";
import "./Card.css";

function Card({ name, description }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within the card
    const y = e.clientY - rect.top;  // Y position within the card

    const xOffset = ((x / rect.width) - 0.5) * 20; // Adjust the multiplier for more or less tilt
    const yOffset = ((y / rect.height) - 0.5) * 20;

    setStyle({
      transform: `rotateX(${yOffset}deg) rotateY(${xOffset}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0) rotateY(0)",
    });
  };

  return (
    <div 
      className="card" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <h2>Hi 👋 this is {name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
