import React from "react";

import "./MovieOverView.css";
import generateImageUrl from "../../../../../utils/generateImageUrl";
import data from "../../../../../data";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const MovieOverView = ({ title, rating, poster }) => {
  return (
    <div className="movie-overview">
      <img
        className={"movie-overview-poster"}
        src={generateImageUrl(data.posterSizes.w500, poster)}
        alt={title}
      />
      <div className="movie-overview-content">
        <div className="movie-overview-content-title-rating">
          <h3>{title}</h3>
          <p>{rating}</p>
        </div>
        <FavoriteButton />
      </div>
    </div>
  );
};

export default MovieOverView;
