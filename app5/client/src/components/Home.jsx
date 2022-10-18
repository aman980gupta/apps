import React from 'react'
import { useEffect } from 'react';


const Home = () => {
    const getData =async ()=>{
        let res = await fetch("http://localhost:8000");
        console.log(res)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
      Home page
    </div>
  )
}

export default Home
