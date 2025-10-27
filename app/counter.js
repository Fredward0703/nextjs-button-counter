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

             <button onClick={increase}>Increase</button>
             <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>

            <div style={{marginTop:"10px"}}>
             <label>Step: </label>
             <input type="number" value={step} onChange={(c) => setStep(Number(c.target.value))} />
            </div>
        </div>
    );
};

export default Counter;