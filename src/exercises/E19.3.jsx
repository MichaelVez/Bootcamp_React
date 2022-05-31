import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App193() {
  const [userInput, setUserInput] = useState("");
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    fetchReq();
  }, []);
  const fetchReq = async () => {
    const {
      data: { hits },
    } = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${userInput}`
    );
    return hits;
  };
  const mapData = () => {
    return display.map((arrI) => {
      return (
        <div key={arrI.url}>
          <a href={arrI.url} target='_blank'>
            {arrI.title}
          </a>
        </div>
      );
    });
  };

  const func = async () => {
    let res = await fetchReq(userInput);
    console.log(res);
    setDisplay(res);
  };
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <div>
      <input type='text' value={userInput} onChange={handleChange} />
      <button onClick={func}>Search</button>
      <div>{mapData()}</div>
    </div>
  );
}
