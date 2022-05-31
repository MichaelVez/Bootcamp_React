import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App191() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const {
      data: { results },
    } = await axios.get("https://swapi.dev/api/films/");
    console.log(results);
    setData(results);
  };

  const mapData = () => {
    return data.map((movie) => {
      return (
        <div key={movie.title}>
          Movie#{movie.episode_id}, Movie name: {movie.title}, Director:{" "}
          {movie.director}
        </div>
      );
    });
  };
  return <div>{mapData()}</div>;
}
