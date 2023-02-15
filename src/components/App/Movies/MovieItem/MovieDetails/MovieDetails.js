import React from "react";

import "./MovieDetails.css";
import generateImageUrl from "../../../../../utils/generateImageUrl";
import data from "../../../../../data";

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <div className="movie-details-header">
        <img
          src={generateImageUrl(data.posterSizes.w154, movie.poster_path)}
          alt={movie.title}
        />
        <div className="movie-details-header-text">
          <h4>{movie.title}</h4>
          <p>{movie.vote_average}</p>
          <p>genre</p>
        </div>
      </div>

      <div className="movie-details-content">
        <div className="movie-details-description">
          <h3>Description</h3>
          <p>{movie.overview}</p>
        </div>

        <div className="movie-details-cast">
          <h3>Cast</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
