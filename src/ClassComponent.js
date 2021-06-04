import React from 'react';
import './App.css';


export class ClassComponent extends React.Component {
    render() {
        return (
            //<div className="App">
                <header className="header">
                    <h1>This is Class Component {this.props.question}</h1>
                    {this.props.children}
                </header>
            //</div>
        );
    }
}

// export default ClassComponent;
