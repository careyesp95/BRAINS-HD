import React from "react";
import ReactPlayer from 'react-player';
import video from "./videoMedia/videos.mp4";
import "./Cover.css";

const Cover = () => {
  //<ReactPlayer  className="video"   url={video}  playing  loop  muted />
  
  return (
    <main id='home' className="cover-container">
      <video className="video" src={video} autoPlay loop muted/>
      
      <h1>BRAINS HD</h1>
      <p> Conectividad | Velocidad | Estabilidad </p>
    </main>
  );
};

export default Cover;