'use client'
import { useState } from "react";

function Counter({initialCount = 0, initialStep =1}) {
    const [count,setCount] = useState(initialCount);
    const [step, setStep] = useState(initialStep);

    function increase() {
        setCount(count + step);
    }

    function decrease() {
        if (count - step >= 0) {
            setCount(count - step);
        }
    }

    function reset() {
        setCount(0);
    }

    return(
        <div style={{border:"1px solid cyan", padding:"10px", margin:"10px"}}> 
            <p aria-live="polite">Count: {count}</p>

            <div style={{display:"flex", gap:"10px", marginTop:"10px"}}>
            <button style={{color:"black", backgroundColor:"white"}} onClick={increase}>Increase</button>
            <button style={{color:"black", backgroundColor:"white"}} onClick={decrease}>Decrease</button>
            <button style={{color:"black", backgroundColor:"white"}} onClick={reset}>Reset</button>
            </div>

            <div style={{marginTop:"10px"}}>
             <label>Step: </label>
             <input type="number" value={step} onChange={(c) => setStep(Number(c.target.value))} />
            </div>
        </div>
    );
};

export default Counter;