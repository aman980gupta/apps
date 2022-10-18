import React, {useState} from "react"
export default function Signup(){
    const [fullName,setFullName] = useState("");    
const [email,setEmail] = useState("");
const [confirmEmail,setConfirmEmail] = useState("");
const [password,setPassword] = useState("");
const [conPassword,setConPassword] = useState("");
return(
    <div className= "container">

        <form action="">
        <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleInputName"  autoComplete="off"
                value={fullName} onChange={event=>setFullName(event.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off"
                value={email} onChange={event=>setEmail(event.target.value)}/>
            
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputConEmail1" className="form-label">Confirm Email address</label>
                <input type="email" className="form-control" id="exampleInputConEmail1" aria-describedby="emailHelp" autoComplete="off"
                value={confirmEmail} onChange={event=>setConfirmEmail(event.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="off" 
                value={password} onChange={event=>setPassword(event.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputConPassword1" className="form-label">COnfirm Password</label>
                <input type="password" className="form-control" id="exampleInputConPassword1" autoComplete="off" 
                value={conPassword} onChange={event=>setConPassword(event.target.value)}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
    </div>
);
}