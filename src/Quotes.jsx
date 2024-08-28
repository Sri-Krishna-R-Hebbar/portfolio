// Page2.jsx
import React, { useEffect, useState } from "react";
import Quotes from "./Quote.js"; 
import "./Quotes.css";
import gsap from "gsap";

const Page2 = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const getRandomQuote = () => {
      const index = Math.floor(Math.random() * Quotes.length);
      setQuote(Quotes[index]);
    };

    getRandomQuote();

    gsap.fromTo(
      ".quote",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="page2">
      <h2>Quote of the Day:</h2>
      <p className="quote">{quote}</p>
    </div>
  );
};

export default Page2;
