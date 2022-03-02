import React from "react";
import Navbar from "../components/Navbar";

export const Portfolio = () => {
  return (
    <div>
      <Navbar />{" "}
      <div className="Showcase">
        <div className="Project" id="ECONNECT">
          <a href="/Econnect">Econnect</a>
        </div>
        <div className="Project" id="ECONNECT">
          <a href="/SportsTable">Sports League</a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
