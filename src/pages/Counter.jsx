import React, {useState} from 'react'

const Counter = () => {
    //javascript logic
    const [count, setCount] = useState(0);
    const Increase = () => {
        setCount(count + 1);
    }   
    const Decrease = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={Increase}>+</button>
            <button onClick={Decrease}>-</button>
            <button onClick={reset}>Reset</button>
        </div>

    )

}

export default Counter