import { React, useState, useEffect, useCallback } from 'react';
import MoviesList from './MoviesList';
import Layout from './Layout';

import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  // fetch('https://swapi.dev/api/films/').then(response => {
  //   return response.json();
  // }).then(data => {
  //   setMovies(data.results);
  // });

  const fetchMoviesHandler = useCallback(() => {
    fetch('https://swapi.dev/api/films/').then(response => {
      return response.json();
    }).then(data => {
      setMovies(data.results);
    });
  });

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <Layout>
      <header className="App-header">
        <h1 className="header-title">Let's get sratrted with RESTful APIs Integration</h1>
      </header>
      <MoviesList movies={movies} />
    </Layout>
  );
}

export default App;
