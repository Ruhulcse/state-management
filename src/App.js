import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import AddMovies from './components/AddMovies';
import {MovieProdiver} from "./MovieContext";

function App() {
  return (
    <MovieProdiver>
      <div className="App">
        <Nav/>
        <AddMovies/>
        <MovieList/> 
      </div>
    </MovieProdiver>
  );
}

export default App;
