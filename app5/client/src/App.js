import React from 'react';
import './App.css';
import {Context,MovieProvider} from './components/Context';
import MovieContext from './components/MovieContext';
import ImperativeHandle from './components/Parent';
import UseReducer from './components/UseReducer';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Home from './components/Home';
// import MainPage from './components/MainPage';
// import Product from './components/Product';

function App() {
  return (
    <>
      <div className="App">
        app for react
      </div>
      <ImperativeHandle/>
      <MovieContext/>
      {/* <UseReducer/> */}
      {/* <BrowserRouter>
          <MainPage/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>

        </Routes>
      </BrowserRouter> */}


    </>
  );
}

export default App;
