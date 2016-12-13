import React, { Component } from 'react';


class GroceryCheckout extends Component {
    render() {
        return (
            <div className="grocery-checkout-items">
                {this.props.itemList.map(item => 
                    <p key={item.id}>{item.price}</p>
                )}
            </div>
        );
    }
}

export default GroceryCheckout;