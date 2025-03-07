import { interval } from 'd3'
import React, { useState, useEffect } from 'react'

function Clock() {

    let [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(
        () => {
            let interval = setInterval(
                () => {
                    setTime(new Date().toLocaleTimeString())
                }, 1000
            )
            return () => clearInterval(interval)
        }, []
    )

    return (
        <div>
            <h2>{time}</h2>
        </div>
    )
}

export default Clock