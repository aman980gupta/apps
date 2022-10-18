import React,{useContext} from 'react'
import { MovieContext } from './MovieContext'
const style = {
    "display": "flex",
    "width": "100vw",
    "height": "10vh",
    "flexDirection" : "row",
    "flexWrap" : "nowrap",
    "alignContent" : "center",
    "justifyContent" : "space-around",
    "alignItems" : "center",
    "backgroundColor" : "lavenderblush"
}

const Nav = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div style={style}>
      <h2>Nav</h2>
      <p>Number of Movie : {movies.length}</p>
    </div>
  )
}

export default Nav
