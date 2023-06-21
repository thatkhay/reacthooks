import React, { useState } from 'react'

function Counter() {
const [count, setCount] = useState(0)


function minus() {
    if (count === 0) {
        return;
    }
    setCount(prv => prv - 1)
}

function add() {
    setCount(prv => prv + 1)
}


  return (
    <div>
      <button onClick={minus} style={{backgroundColor:'red'}}>-</button>  
        <span > {count} </span>
        
      <button onClick={add}  style={{backgroundColor:'green'}}>+</button>  
    </div>
  )
}

export default Counter