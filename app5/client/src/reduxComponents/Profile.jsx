import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector((state)=>state.user.value)
    const themeColor = useSelector((state)=>state.theme.value)
  return (
    // <div style={{color:themeColor}}>
    //   <h1>Profile Page </h1>
    //   <p>Name : {value.name}</p>
    //   <p>Age : {value.age}</p>
    //   <p>Email : {value.email} </p>
   <div> poile </div>
  )
}

export default Profile