import React from "react";
import { useState } from "react";

import "./MovieItem.css";
import MovieOverView from "./MovieOverView/MovieOverView";
import MovieDetails from "./MovieDetails/MovieDetails";

const MovieItem = ({ movie }) => {
  const [isDetailsView, setIsDetailsView] = useState(false);

  const toggleMovieDetails = () => {
    setIsDetailsView(!isDetailsView);
  };

  return (
    <div
      className={`movie-item ${isDetailsView && "flip-movie-item"}`}
      onClick={toggleMovieDetails}
    >
      <MovieOverView
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        rating={movie.vote_average}
      />
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieItem;
