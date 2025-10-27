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
        <> 
        <h2>Count: {count}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        </>
    );
};

export default Counter;