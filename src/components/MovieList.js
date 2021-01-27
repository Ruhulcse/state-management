import React,{useState} from 'react'

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
                <li>{movie.name}</li>
            ))}
        </div>
    )
}

export default MovieList
