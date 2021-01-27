import React from 'react'

function Movie({name,price}) {
    return (
        <div>
            <h1>{name}</h1>
            <h3>{price}</h3>
        </div>
    )
}

export default Movie;
