import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "../videoCard/VideoCard";
import axios from "../../utils/axios";
import FlipMove from "react-flip-move";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      <FlipMove>
        {movies.map((m) => (
          <VideoCard movie={m} key={m.id}/>
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
