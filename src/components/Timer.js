import React, { useState, useEffect } from 'react'

function Timer() {

    let [count, setTimer] = useState(10);

    useEffect(() => {
        if (count > 0) {
            let interval = setInterval(() => setTimer(prev => prev - 1), 1000);
            return (() => clearInterval(interval))
        }
    }, [count])

    return (
        <div>{count > 0 ? <h2>{count}</h2> : <h2>Time's up!</h2>}</div>
    )
}

export default Timer;

