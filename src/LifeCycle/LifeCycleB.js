import React from 'react'
import './../App.css'

class LifeCycleB extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: "Bilal"
        };
        console.log("Life Cycle B : Constructor")
    }

    componentDidMount() {
        console.log("Life Cycle B : componentDidMount")
    }


    render() {
        console.log("Life Cycle B : Render");
        return (
            <div>
                <h1>Life Cycle B</h1>
            </div>
        )
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Life Cycle B : getDerivedStateFromProps");
        return null;
    }
}

export default LifeCycleB