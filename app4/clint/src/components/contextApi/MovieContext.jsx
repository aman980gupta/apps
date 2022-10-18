import React,{useState,createContext} from "react";


export const MovieContext = createContext()

export const MovieProvider = (props) =>{
    const [movies,setMovies] = useState([
        {
          name: "game of throne",
          price: "10",
          id : 1
        },
        {
          name: "avengers",
          price: "6",
          id : 2
        },
        {
          name: "games",
          price: "11",
          id : 3
        },
        {
          name: "games of vice city",
          price: "200",
          id : 4
        }
      ]);
    return(
        <div>
            <MovieContext.Provider value={[movies,setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    );
}; 