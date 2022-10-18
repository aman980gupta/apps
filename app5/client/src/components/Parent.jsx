import React,{useRef} from "react";
import Child from "./Child";

function ImperativeHandle(){
    const buttonRef = useRef(null);
    return (
        <div>
            <button onClick={()=>{
                buttonRef.current.alterToggle();
            }} >button from Parent component</button>
            <Child ref={buttonRef}/>
        
        </div>
    )
}
export default ImperativeHandle;