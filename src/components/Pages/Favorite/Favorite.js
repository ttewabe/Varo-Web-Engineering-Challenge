import React from "react";

import PageTitle from "../../_shared/PageTitle/PageTitle";
import useFetchData from "../../hooks/useFetchData";
import Movies from "../../App/Movies/Movies";
import MovieItem from "../../App/Movies/MovieItem/MovieItem";
import data from "../../../data";
import useAuth from "../../hooks/useAuth";

const Favorite = () => {
  const { account, sessionId } = useAuth();
  const { response, error, loading } = useFetchData(
    `${data.imdbHostUrl}3/account/${account.id}/favorite/movies?api_key=${data.apiKey}&session_id=${sessionId}`
  );
  
  if (error) {
    return <PageTitle>Error</PageTitle>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <PageTitle>My favorite movies</PageTitle>
      {/* <p>{JSON.stringify(response)}</p> */}
      {<Movies>
        {response?.results?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Movies>}
    </React.Fragment>
  );
};

export default Favorite;
