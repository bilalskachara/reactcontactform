import React from 'react';
import './App.css'

function FunctionCall() {
    function changeEvent() {
        console.log("This is error in Function Call")
    }

    return (
        <div className="header">
            <p><b>Function Call</b></p>
            <button onClick={changeEvent}>Change Event</button>
        </div>
    )
}

export default FunctionCall;