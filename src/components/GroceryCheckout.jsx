import React, { Component } from 'react';

class GroceryCheckout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.items
        }
    }
    groceryCart = () => {
        let cart = this.state.list;
    }

    priceFormat = (price) => {
        return price.toFixed(2);
    }

    outputPrice = (price) => {
        console.log(this.props.items)
    }

    render() {
        return (
            <div className="grocery-checkout-items" onChange={this.outputPrice}>
                <h1 className="total">Grocery Checkout</h1>
                <h3>Total: {this.priceFormat(this.props.total)}</h3>
                <ul>{this.props.items.map(item =>
                    <li key={item.id}>
                        <span>{item.item} {item.quantity ? `x ${item.quantity}` : ''}</span>
                        <span onClick={() => this.props.increase(item)}> +</span>
                        <span onClick={() => this.props.decrease(item)}> -</span>
                    </li>
                )}</ul>
            </div>
        );
    }
}

export default GroceryCheckout;