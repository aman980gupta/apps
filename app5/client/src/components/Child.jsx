import React,{useState,forwardRef,useImperativeHandle} from "react"

const Child = forwardRef((porps,ref)=>{
    const [toggle,setToggle] = useState(false);

    useImperativeHandle(ref,()=>({
        alterToggle(){
            setToggle(pre=>!pre);
        },
    }));

    return(
        <>
        <button>button form child componnet</button>
        {toggle && <h2>toggle</h2>}
        
        </>
    );

});

export default Child;