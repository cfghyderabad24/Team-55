import React,{useState} from 'react'

function Counter() {
    let [Count,setCount]=useState(0)
    let Incr = ()=>{
        setCount(Count+1);
    }
    let Decr = ()=>{
        setCount(Count-1);
    }

  return (
    <div>
        <div className="btns d-flex bg-primary justify-content-center ">
        <button className="btn btn-dark me-5" onClick={Incr}>{Count}</button>
        <button className="btn btn-warning" onClick={Decr}>{Count}</button>
        </div>
    </div>
  )
}

export default Counter