import React from "react";

import "./MovieOverView.css";
import generateImageUrl from "../../../../../utils/generate-image-url";
import data from "../../../../../data";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useLocation } from "react-router-dom";

const MovieOverView = ({ id, title, rating, poster }) => {
  const location = useLocation();

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
        <FavoriteButton
          id={id}
          isFavorite={location.pathname === "/favorite-movies"}
        />
      </div>
    </div>
  );
};

export default MovieOverView;
