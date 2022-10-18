import React, { useEffect, useState, } from 'react'
//import "./style.css"

const MainPage = () => {

    const [count, setCount] = useState(0)
    const add = () => {
        setCount(count + 1)
        //console.log(Math.floor(Math.random() * 3 ))
    }
    const subs = () => {
        setCount(count - 1)
    }
    useEffect(() => {
        
    },[add,subs])
    return (
        <div className='count'>
            <div className='count_div'>
                <span>
                    {count}
                </span>
            </div>
            <div className="buttons">
                <button onClick={add}>Add</button>
                <button onClick={subs}>Subs</button>
            </div>

        </div>
    )
}

export default MainPage
