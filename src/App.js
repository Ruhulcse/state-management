import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import {MovieProdiver} from "./MovieContext";

function App() {
  return (
    <MovieProdiver>
      <div className="App">
        <Nav/>
        <MovieList/> 
      </div>
    </MovieProdiver>
  );
}

export default App;
