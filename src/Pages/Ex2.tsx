import '../css/main.css'
import '../css/Ex2.css'

import { useEffect, useState } from "react";


export default function Clicker() {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if(counter<=0) {
      decrementCounter = () => setCounter(0);
    }
    // useEffect not done --------------------------------------
    // useEffect(() => {
      
    // }, [hello]);
    
    return (
      <div className='counter'>
        <h1>Clicker</h1>
        <h2>{counter}</h2>
        {/* <h2>{hello}</h2> */}
        <div className='inc-button'>
            <button onClick={decrementCounter}>-</button>
            <button onClick={incrementCounter}>+</button>
        </div>
      </div>  
    );
    

}
