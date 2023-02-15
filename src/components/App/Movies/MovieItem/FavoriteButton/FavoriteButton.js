import React from "react";

import "./FavoriteButton.css";
import heartFilled from "../../../../../assets/heart-filled.svg";
import emptyHeart from "../../../../../assets/empty-heart.svg";
import useAuth from "../../../../hooks/useAuth";

const FavoriteButton = ({ isFavorite }) => {
  const { sessionId } = useAuth();

  const toggleFavoriteMovie = (event) => {
    event.stopPropagation();
    console.log(sessionId);
  };

  return (
    <div className="movie-favorite-button">
      <img
        src={isFavorite ? heartFilled : emptyHeart}
        onClick={toggleFavoriteMovie}
        alt={"heart icon"}
      />
    </div>
  );
};

export default FavoriteButton;
