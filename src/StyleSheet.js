import React from 'react';
import './App.css'

function StyleSheet(props) {
    let className = props.isvalue ? 'demo' : 'demo1';
    return (
        <div className="header">
            <h1 className={`${className} demo2 `}>Hello StyleSheet</h1>
        </div>
    )
}

export default StyleSheet