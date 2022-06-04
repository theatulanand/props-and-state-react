
import React, { useState } from 'react';



export default function Counter(prop) {
    const [count, setCount] = useState(prop.count);
    const increase = ()=>{
        setCount(count + 1);
    };

    const decrease = ()=>{
        setCount(count - 1);
    };
    const double = ()=>{
        setCount(count * 2);
    };
  return (
    <>
      <div id = "main">
          <h1 style={{textAlign : "center"}}>Counter App</h1>
          <h2 style={count%2 === 0 ? {color: "green"} : {color : "red"}}>{count}</h2>
          <button onClick={increase} style={{backgroundColor: "Green"}}>Increase</button>
          <button onClick={decrease} style={{backgroundColor: "Red"}}>Decrease</button>
          <button onClick={double} style={{backgroundColor: "Yellow"}}>Double</button>
      </div>
    </>
  );
}
