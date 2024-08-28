import React from "react";
import "./PageThree.css";

function PageThree() {
  const sections = [
    { id: 1, title: "My Works" },
    { id: 2, title: "About Me" },
    { id: 3, title: "My Favorites" },
    { id: 4, title: "Experience" },
    { id: 5, title: "Tech Inventory" },
    { id: 7, title: "Social Sphere" },
    { id: 8, title: "Learning Lounge" },
    { id: 9, title: "Time Line" },
    { id: 10, title: "Drop A Line" },
  ];

  return (
    <div className="page-three-container">
      {sections.map((section) => (
        <div className="section-card" key={section.id}>
          <h2>{section.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default PageThree;
