import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectSession } from "../../store/authentication-slice";
import data from "../../data";

const useFavorite = () => {
  const markFavorite = (id, value, sessionId) => {
    return fetch(
      `${data.imdbHostUrl}/account/${sessionId}/guest_session/new?api_key=${data.apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: id,
          favorite: value,
        }),
      }
    );
  };

  return { markFavorite: markFavorite };
};

export default useFavorite;
