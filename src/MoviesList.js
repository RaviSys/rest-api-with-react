import React from 'react';
import Movie from "./Movie";

const MoviesList = (props) => {
  return (
    <div className="movie-list">
      <h1 className="text-center">List of Star Wars Movies</h1>
      {props.movies.map((movie) => (
        <Movie 
          key={movie.episode_id} 
          title={movie.title}
          opening_crawl={movie.opening_crawl}
          release_date={movie.release_date}
          director={movie.director}
          producer={movie.producer}
        />
      ))}
    </div>
  );
}

export default MoviesList;
