import React from 'react'
import './App.css'

class Fragment extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={{borderTop:"1px solid rgba(173, 173, 173, 0.35)",marginTop:"10px"}}>Hello this is React Fragment</h1>
                <p>This is Fragment which can't create any other tag</p>
            </React.Fragment>
        )
    }
}

export default Fragment