import React from 'react';
import './App.css'
import './CssModule.css';
import Style from './CssModule.module.css';

function InlineStyle() {
    return(
        <div>
            <h1 className={Style.success}>Inline Style</h1>
            <h1 className="error">Inline Style</h1>
        </div>
    )
}

export default InlineStyle