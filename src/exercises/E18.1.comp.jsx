import React, { useState } from "react";

const Mycomp = ({ string, number }) => {
  const [text, setText] = useState(string.slice(0, number));
  const [buttonText, setButton] = useState("...Show More");

  const handleClick = () => {
    if (buttonText === "...Show More") {
      setText(string);
      setButton("Show less");
    } else {
      setText(string.slice(0, number));
      setButton("...Show More");
    }
  };
  return (
    <div>
      {text}
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};
export default Mycomp;
