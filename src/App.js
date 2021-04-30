import { React, useState } from 'react';
import MoviesList from './MoviesList';
import Layout from './Layout';

import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films/').then(response => {
      return response.json();
    }).then(data => {
      setMovies(data.results);
    });
  };

  return (
    <Layout>
      <header className="App-header">
        <h1 className="header-title">Let's get sratrted with RESTful APIs Integration</h1>
      </header>
      <button type="button" onClick={fetchMoviesHandler}>Load Movies</button>
      <MoviesList movies={movies} />
    </Layout>
  );
}

export default App;
