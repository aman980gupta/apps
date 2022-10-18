
import './App.css';
import React from 'react';
import MainPage from './components/MainPage';
import Page1 from './components/Page1';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import { MovieProvider } from './components/contextApi/MovieContext';
import Nav from './components/contextApi/Nav';
import MovieList from './components/contextApi/MovieList';
import AddMovie from './components/contextApi/AddMovie';


function App() {


  return (
    <>
      <div className="App">
        <h2>hello app app</h2>
        <MovieProvider>
          <Nav />
          <AddMovie/>
          <MovieList/>
        </MovieProvider>
        

      </div>
      <BrowserRouter>
          <nav>
            <ul>
              
              <li><Link to="/page1">Page1</Link></li>
              <li><Link to="/page3">Page3</Link></li>
              <li><Link to="/page4">Page4</Link></li>
              
            </ul>
          </nav>
        <Routes>


          <Route path="/" element={<Page1/>} />
          <Route path="/page1" element={<Page1/>} />
          <Route path="/page3" element={<Page3/>}/>
          <Route path="/page4" element={<Page4/>}/>
        </Routes>
      </BrowserRouter>
      <MainPage/>

    </>
  );
}

export default App;
