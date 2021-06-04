import React from 'react'
import './App.css'

function CopyMapValue(props) {
    return (
        <div>
            <h1 key={props.value}>{props.value} {props.name} {props.clas}</h1>
        </div>
    )
}

export default CopyMapValue