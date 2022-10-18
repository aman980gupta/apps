import React, { useState,useContext } from 'react'
import { MovieContext } from './MovieContext'

const AddMovie = () => {
    const[name,setName]= useState("")
    const[price,setPrice]= useState("")
    const [,setMovies] = useContext(MovieContext)

    const updateName = (e)=>{
        setName(e.target.value)
    }
    const updatePrice = (e)=>{
        setPrice(e.target.value)
    }
    const addMovie = (e) =>{
        e.preventDefault();
        setMovies(pre=>[...pre,{name:name,price:price,id:pre.legth +1}])
        setName("")
        setPrice("")


    }
  return (
    <form onSubmit={addMovie}>
        <input type="text" name='name' value={name} onChange={updateName} autoComplete= "off"/>
        <input type="text" name='price' value={price} onChange={updatePrice} autoComplete= "off" />
        <button>Add movie</button>
    </form>
  );
}

export default AddMovie
