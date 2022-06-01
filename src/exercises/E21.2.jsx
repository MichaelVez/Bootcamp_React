import React, { useRef } from "react";
import video from "./Assets/E211Video.mp4";

const App212 = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    console.log(videoRef);
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef}>
        <source src={video} type='video/mp4'></source>
      </video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default App212;
