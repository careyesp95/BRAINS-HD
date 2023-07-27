import React from "react";
import "./Cover.css";

const Cover = () => {
  //<video className="video" src={video} autoPlay loop muted/>
  return (
    <main id='home' className="cover-container">
      <video className="video" src='./videos.mp4' autoPlay loop muted/>
      <h1>BRAINS HD</h1>
      <p> Conectividad | Velocidad | Estabilidad </p>
    </main>
  );
};

export default Cover;