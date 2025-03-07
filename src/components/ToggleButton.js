import React, { useState } from 'react'

function ToggleButton() {

    let [isOn, toggle] = useState(true);
    let handleToggle = () => toggle(!isOn);
    return (
        <div>
            <button onClick={handleToggle} style={{ backgroundColor: isOn ? "green" : "red" }}>{isOn ? 'ON' : 'OFF'}</button>
        </div >
    )
}

export default ToggleButton
