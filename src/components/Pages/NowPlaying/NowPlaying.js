import React from "react";

import PageTitle from "../../_shared/PageTitle/PageTitle";
import useFetchData from "../../hooks/useFetchData";
import Movies from "../../App/Movies/Movies";
import MovieItem from "../../App/Movies/MovieItem/MovieItem";

const NowPlaying = () => {
  const { response, error, loading } = useFetchData("/movies/nowPlaying");

  if (error) {
    return <PageTitle>Error</PageTitle>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  
  return (
    <React.Fragment>
      <PageTitle>Now Playing</PageTitle>
      {/* <p>{JSON.stringify(response)}</p> */}
      <Movies>
        {response?.results?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Movies>
    </React.Fragment>
  );
};

export default NowPlaying;
