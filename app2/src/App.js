
import './App.css';
import React, {useState} from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App(){
  const [btnText,setBtnText] = useState("login");
  const handleClick =()=>{
    if(btnText==="login"){
      setBtnText("signUp")
    }else{setBtnText("login")}
  }
  if(btnText==="login"){
  return(<>
    <Login/>
    <button onClick={handleClick}>clcik {btnText}</button>
    </>);
  }else{
    return(<>
      <Signup/>
      <button onClick={handleClick}>clcik {btnText}</button>
      </>);
  }
}
export default App;