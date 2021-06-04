import React from 'react';
import './App.css';
import { ArrowFunComponent } from './ArrowFunComponent';
import { ClassComponent } from './ClassComponent';

function FunctionComponent(props) {
    return (
        <div className="App">
            <ArrowFunComponent name="Hello Bilal">
                <a href="http://localhost:3000/">Click here</a>
            </ArrowFunComponent>
            <ClassComponent question="How are you?">
                <h3>Hello, I am Children of Class Component</h3>
            </ClassComponent>
            <header className="header">
                <h1>This is Function Component {props.info}</h1>
            </header>
        </div>
    );
}

export default FunctionComponent;
