import React, {Component} from 'react'
import LifeCycleB from './LifeCycleB'
import './../App.css'

class LifeCycleA extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "Bilal"
        };
        console.log("Life Cycle A : Constructor")
    }

    componentDidMount() {
        console.log("Life Cycle A : componentDidMount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Life Cycle A : componentDidUpdate")
    }

    add() {
        this.setState({
            name: "abc"
        });
    }

    render() {
        console.log("Life Cycle A : Render");
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>Life Cycle A</h1>
                <button onClick={() => {
                    this.add()
                }}>Add
                </button>
                <LifeCycleB/>
            </div>
        )
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Life Cycle A : getDerivedStateFromProps");
        return null;
    }
}

export default LifeCycleA