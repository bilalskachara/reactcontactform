import React from 'react';
import './App.css'

function InlineStyle() {
    const heading={
        color:'yellow',
        backgroundColor:'black',
        fontSize:'35px',
        textAlign:'center'
    };

    return(
        <div>
            <h1 style={heading}>Inline Style</h1>
        </div>
    )
}

export default InlineStyle