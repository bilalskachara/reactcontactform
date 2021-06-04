import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            address: '',
            formData: ''
        }
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    };

    handleSubmit = (e) => {
        if (this.state.username === '') {
            this.setState({
                formData: 'Enter Username'
            });
        } else if (this.state.address === '') {
            this.setState({
                formData: 'Enter Address'
            });
        } else if (this.state.username !== '' && this.state.address !== '') {
            this.setState({
                formData: `${this.state.username} ${this.state.address}`
            });
        }
        e.preventDefault();
    };

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit} style={{textAlign: "center"}}>
                <div>
                    <h1 className="demo">Hello I am Form</h1>
                    <label htmlFor="username">Username</label>
                    <input onChange={this.handleUsername} type="text" id="username" value={this.state.username}/>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <textarea onChange={this.handleAddress} id="address" value={this.state.address}/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
                <div>
                    <h1>{this.state.formData}</h1>
                </div>
            </form>
        )
    }
}

export default Form