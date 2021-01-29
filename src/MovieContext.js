import React,{useState,createContext} from 'react'
export const MovieContext = createContext();

export const MovieProdiver = (props) => {
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
    //context provider passs value to all child
    return (
        <MovieContext.Provider value ={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
