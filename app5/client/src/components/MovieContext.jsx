import React from 'react'
import { useReducer } from 'react'

const reducer = (state, action)=>{
 switch(action.type){
   case  "Increment" : return (state.count + 1,state.showText)
   case  "toggleShowText" : return (state.count,!state.showText)
   default : return state
 }
}
const MovieContext = () => {
  const inisialState = {count : 0, showText : false}
  const [state , dispatch] = useReducer(reducer,inisialState)

  return (
    <div>
      <h2>{state.count}</h2>
      <button
      onClick={()=>{
        dispatch({type : "Increment"})
        dispatch({type : "toggleShowText"})
      }}
      >click here</button>
      {state.showText && <h2>this is text</h2>}
    </div>
  )
}

export default MovieContext
