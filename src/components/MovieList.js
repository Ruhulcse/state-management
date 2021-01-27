import React,{useState,useContext} from 'react'
import Movie from './Movie';
import {MovieContext} from '../MovieContext';

function MovieList() {
    const value = useContext(MovieContext);
    return (
        <div>
            <h>{value}</h>
            {/* {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))} */}
        </div>
    )
}

export default MovieList
