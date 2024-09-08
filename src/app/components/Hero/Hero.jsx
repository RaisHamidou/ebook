import React from "react";
import bg from "../../assets/hero/desktop.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="background">
        <img src={bg.src} alt="" />
      </div>
      <div className="overlay">
        <div className="container-overlay">
          <h1>Titre</h1>
          <h2>Sous titre</h2>
          <button>Acheter maintenant !</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
