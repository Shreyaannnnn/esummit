import React from "react";
import "./Home.css";
import video from "../asset/video.mp4";
const Home = () => {
  return (
    <div className="container">
      <video autoplay loop muted id="myVideo">
        <source src={video} type="video/mp4" />
        video not supported
      </video>
      <div id="content">
        <h1>Trader's Tussle 2.0</h1>
        <button id="button">
          <a href="/">Register now</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
