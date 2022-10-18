import React,{useState,createContext} from 'react'

export const MovieProvider = createContext();

export const Context = (props) => {
    const [movies,setMovies] = useState([
        {
            name:"harry potter",
            price:"$10",
            id:1
        },
        {
            name:"game of throne",
            price:"$12",
            id:2
        },
        {
            name:"pk",
            price:"$5",
            id:3
        }
    ]);
  return (<MovieProvider.Provider>
      {props.children}
  </MovieProvider.Provider>);
}

{/* <>
    {movies.map(movie=><li>{movie.name}</li>)}
    </> */}

