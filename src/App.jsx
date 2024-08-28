import React, { useEffect } from "react";
import Card from "./Card";
import Nav from "./Nav";
import Quotes from "./Quotes";
import ImageAnimations from "./ImageAnimations";
import PageThree from "./PageThree";
import Footer from "./Footer";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.fromTo(
      ".page1",
      {
        scale: 1,
        scrollTrigger: {
          trigger: ".main",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: true,
        },
      },
      {
        scale: 1.2,
      }
    );

    gsap.fromTo(
      ".card, .section-card",
      {
        scale: 1,
        scrollTrigger: {
          trigger: ".main",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      },
      {
        scale: 1.2,
      }
    );
  }, []);

  return (
    <>
      <Nav />
      <div className="page1">
        <Card
          name="Sri Krishna"
          description="Welcome to my Portfolio. This is my space to showcase my work. Have an idea? Let's collaborate!"
        />
      </div>
      <Quotes />
      <ImageAnimations />
      <div className="page3">
        <PageThree />
      </div>
      <Footer />
    </>
  );
}

export default App;
