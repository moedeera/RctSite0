import React from "react";
import Navbar from "../components/Navbar";

export const Portfolio = () => {
  return (
    <div>
      <Navbar />{" "}
      <div className="Showcase">
        <div className="Project">
          <a href="/Econnect">Econnect</a>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
