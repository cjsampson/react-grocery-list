import React, { Component } from 'react';

import '../styles/grocery.sass';

class GroceryCheckout extends Component {
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
                        <p>{item.item} {item.quantity ? `x ${item.quantity}` : ''}</p>
                    </li>
                )}</ul>
            </div>
        );
    }
}

export default GroceryCheckout;