import React, { useRef } from "react";
import img1 from "./Assets/img1.jpg";
import img1black from "./Assets/img1black.jpg";
export default function App213() {
  const refImg = useRef();
  const func = () => {
    refImg.current.src = img1;
  };
  const func2 = () => {
    refImg.current.src = img1black;
  };
  return (
    <div>
      <img
        src={img1black}
        ref={refImg}
        onMouseEnter={func}
        onMouseLeave={func2}
        width='500px'
        alt=''
      />
    </div>
  );
}
