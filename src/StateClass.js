import React from 'react';
import './App.css';

class StateClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "Bilal",
            roll: this.props.roll
        }
    }

    thanks() {
        this.setState({
            msg: "Thanks for Click"
        });
        console.log(this.props.roll);
    }

    message = (e) => {
        e.preventDefault();
        alert("Message Part")
    };

    render() {
        return (
            <div className="App">
                <header className="header">


                    <h1>This is State through Class Function</h1>
                    <h2>{this.state.msg}</h2>
                    <h3>Your roll no : {this.props.roll}</h3>
                    <button onClick={() => { this.thanks()}}>
                        Click
                    </button>
                    <button onClick={this.message}>Message</button>
                    <a href="https://google.com" onClick={this.message}>Google.com</a>
                </header>
            </div>
        );
    }
}

export default StateClass;
