import React, { useState } from "react";
import FetchData from "./E20.1fetch";

export default function App201() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Show/hide</button>
      {show && <FetchData />}
    </div>
  );
}
