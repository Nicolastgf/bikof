import React from "react";
import NavBar from "../components/navbar/NavBar";
import Info from "../components/info/Info";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="hero-surface">
      <NavBar />
      <Info />
    </div>
  );
};

export default HomePage;
