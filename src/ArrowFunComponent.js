import React from 'react';
import './App.css';

export const ArrowFunComponent = (props) => {
    return (
        //<div className="App">
            <header className="header">
                <h1>This is Arrow Function Component {props.name}</h1>
                {props.children}
            </header>
        //</div>
    );
};

// export default ArrowFunComponent;
