import React from "react";
import "./Hero.css";
import hero from "../../Blue_Archive_logo_JP.png"

const Hero = () => {
  return (
    <div>
      <div className="container">
        <section className="hero">
          <div className="hero-left">
            <h2 className="hero-title">Blue Archive</h2>
            <h3 className="hero-genre">ブルーアーカイブ</h3>
            <p className="hero-description">
              Blue Archive is a tactical role-playing game that allows the
              player to form and mobilize units of up to six members "Specials"
              and four "Strikers" to participate in various military campaigns
              with.
            </p>
            <p className="hero-button">Download Now</p>
          </div>
          <div className="hero-right">
            <img
              src={hero}
              alt="hero-img"
              className="hero-image"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
