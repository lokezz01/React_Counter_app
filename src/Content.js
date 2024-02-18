import React,{ useState } from "react";


function Counter(){
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    }
    return(
      
        <div className="Counter">
           
           <div><h1>Counter App</h1></div>
            <p className="items">You click the button {count} times....</p>
          
            <button onClick={increment} className="items">Increment</button>
            <button onClick={decrement} className="items">Decrement</button>
        </div>
    );
}

export default Counter;