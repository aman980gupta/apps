import React from 'react'
import { useReducer } from 'react'

const reducer = (state,action)=>{
    
    switch(action.type){
        case "Increment":return {count : state.count + 1, showText : state.showText}
        case "toggleShowText" : return {count : state.count, showText : !state.showText}
        default : return state
    }
}

const UseReducer = () => {
    const inisialState = {count : 0,showText : false};
    const [state,dispatch] = useReducer(reducer,inisialState)
    
  return (
    <div>
      <h1>{state.count} </h1>
      <button onClick={()=>{
          dispatch({type:"Increment"})
          dispatch({type:"toggleShowText"})
        
        }}>click here</button>
        {state.showText && <h2>this is text</h2>}
    </div>
  )
}

export default UseReducer
