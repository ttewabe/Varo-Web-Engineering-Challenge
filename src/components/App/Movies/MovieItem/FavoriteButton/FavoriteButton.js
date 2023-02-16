import React from "react";

import "./FavoriteButton.css";
import heartFilled from "../../../../../assets/heart-filled.svg";
import emptyHeart from "../../../../../assets/empty-heart.svg";
import useAuth from "../../../../hooks/useAuth";
import data from "../../../../../data";
import { useHistory } from "react-router-dom";

const FavoriteButton = ({ isFavorite, id }) => {
  const { account, sessionId } = useAuth();
  const history = useHistory();

  const toggleFavoriteMovie = async (event) => {
    event.stopPropagation();
    try {
      await fetch(
        `${data.imdbHostUrl}3/account/${account.id}/favorite?api_key=${data.apiKey}&session_id=${sessionId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            media_type: "movie",
            media_id: id,
            favorite: !isFavorite,
          }),
        }
      );

      window.alert(
        isFavorite
          ? "Movie removed from favorite list..Redirecting to now playing page"
          : "Movie marked as favorite..Redirecting to favorites page"
      );
      if (isFavorite) {
        history.push("/nowPlaying");
      } else {
        history.push("/favorite-movies");
      }
    } catch (err) {
      console.log(err);
    }
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
