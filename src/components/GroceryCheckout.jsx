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
        price.toFixed(2);
    }

    outputPrice = () => {
        console.log(this.state.list)
    }

    render() {
        return (
            <div className="grocery-checkout-items" onChange={this.outputPrice}>
                <h1 className="total">Grocery Checkout</h1>
                <h3>Total: {this.priceFormat(this.props.total)}</h3>
                <ul className="grocery-checkout-list">
                    {this.state.list.map(item =>
                        <li key={item.id}>{item.item}</li>
                )}</ul>
            </div>
        );
    }
}

export default GroceryCheckout;