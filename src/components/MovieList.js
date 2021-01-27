import React,{useState} from 'react'
import Movie from './Movie';

function MovieList() {
    const [movies, setMovies] = useState([
        {
            name: "Dhaka Attack",
            price: "1000Taka",
            id: 221
        },
        {
            name: "Taqdir",
            price: "3500Taka",
            id: 222
        },
        {
            name: "Monpura",
            price: "1500Taka",
            id: 223
        }
    ]);
    return (
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price}/>
            ))}
        </div>
    )
}

export default MovieList
