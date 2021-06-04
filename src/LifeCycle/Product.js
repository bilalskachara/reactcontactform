import React, {Component} from 'react'
import './../App.css'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductID: '', qty: 0
        };
    }

    addToCart = (pid) => {
        this.setState({
            ProductID: pid, qty: this.state.qty + 1
        })
    };

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.addToCart(1)
                }}>Add To Cart
                </button>
                <Cart ProductID={this.state.ProductID} qty={this.state.qty}/>
            </div>
        )
    }
}

export default Product

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("props:"+props.qty+", state:"+state.qty);
        if (props.qty !== state.qty) {
            return {qty: props.qty}
        }
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated")
    }

    render() {
        return (
            <div>
                <h1>Cart {this.state.qty}</h1>
            </div>
        )
    }
}