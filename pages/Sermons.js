import React, { useEffect, useState } from "react";
import axios from "axios";

const Sermons = () => {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/sermons").then((res) => setSermons(res.data));
  }, []);

  return (
    <div>
      <h2>Latest Sermons</h2>
      <ul>
        {sermons.map((sermon) => (
          <li key={sermon._id}>
            <h3>{sermon.title}</h3>
            <audio controls src={sermon.audioUrl}></audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sermons;

