import React from 'react'
import {useState} from 'react'

const Counter = () => {
  const [count, setcount] = useState(0);
  
  const Increase = () => {
    setcount(count + 1);
  } 

  const decrease = () => {
    setcount(count - 1);
  }

  return (
    <div className="counter">
      <h>Counter 1</h>
      <hr></hr>
      <p>{count}</p>

      <button onClick={decrease}>-1</button>
      <button onClick={Increase}>+1</button>
    </div>
  )
}

export default Counter
