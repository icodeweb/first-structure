import React, { useState } from 'react';


function Counter() {
    let [count, setCount] = useState(0)

    function handleIncrement() { setCount(count + 1) }
    function handleDecrement() { setCount(count - 1) }
    return (
        <div>
            <span>{count}</span>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter
