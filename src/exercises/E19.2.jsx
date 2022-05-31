import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App192() {
  const [state, setState] = useState([]);
  const [inputState, setInputState] = useState("");
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    myFetchFunc();
  }, []);
  const myFetchFunc = async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    setState(data);
    activeData(data);
  };
  const handleChange = (e) => {
    setInputState(e.target.value);
    let newArray = [...state];
    newArray = newArray.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(inputState.toLowerCase());
    });
    activeData(newArray);
  };
  const activeData = (arr) => {
    setDisplayData(
      arr.map((country) => {
        return <div key={country.name.common}>{country.name.common}</div>;
      })
    );
  };
  return (
    <div>
      <input type='text' value={inputState} onChange={handleChange} />
      {displayData}
    </div>
  );
}
