import React from 'react'
import {Link} from "react-router-dom"

const MainPage = () => {
  return (
    <div>
      <nav>
          <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/product">Products</Link></li>
          </ul>
      </nav>
    </div>
  )
}

export default MainPage
