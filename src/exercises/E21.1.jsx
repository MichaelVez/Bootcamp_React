import React, { useRef, useState } from "react";

function App211() {
  const [btnState, setBtnState] = useState("edit");
  const inputRef = useRef();
  const func = () => {
    if (btnState === "edit") {
      setBtnState("save");
      inputRef.current.style.display = "inline";
      inputRef.current.focus();
    } else {
      setBtnState("edit");
      inputRef.current.style.display = "none";
    }
  };
  return (
    <div>
      <input type='text' ref={inputRef} style={{ display: "none" }} />
      <button onClick={func}>{btnState}</button>
    </div>
  );
}

export default App211;
