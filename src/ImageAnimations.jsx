import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ImageAnimations.css";
import asteroid from './assets/asteroid.png';
import planet from './assets/planet.png';
import spacecraft from './assets/spacecraft.png';
import astronaut from './assets/astronaut.png';;

gsap.registerPlugin(ScrollTrigger);

const ImageAnimations = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".image-container img");

    images.forEach((img, index) => {
      gsap.fromTo(
        img,
        {
          rotation: 0,
          transformOrigin: "center",
        },
        {
          rotation: index % 2 === 0 ? 360 : -360, 
          scrollTrigger: {
            trigger: img,
            start: "top bottom", 
            end: "bottom top",
            scrub: true, 
            // markers: false,
          },
          duration: 1, 
        }
      );
    });
  }, []);

  return (
    <div className="image-container">
      <img src={asteroid} alt="Asteroid" />
      <img src={planet} alt="Planet" />
      <img src={spacecraft} alt="Spacecraft" />
      <img src={astronaut} alt="Astronaut" />
    </div>
  );
};

export default ImageAnimations;
