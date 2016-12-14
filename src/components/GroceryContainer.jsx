import React, { Component } from 'react';

import GroceryCheckout from './GroceryCheckout';


import groceryData from '../data/groceryData';
import '../styles/grocery.sass';


class GroceryContainer extends Component {
    constructor() {
        super(); 
        this.state = {
            items: groceryData,
            total: 0,
            groceryCart: []
        }
    }
    priceFormat = (price) => {
        return (price).toFixed(2);
    }

    updatePrice = (price) => {
        this.setState({ total: this.state.total += price});
    }

    handleItemClick = (item) => {
        if( this.state.groceryCart.includes(item) ) {
            let itemIndex = this.state.groceryCart.indexOf(item);
            this.state.groceryCart[itemIndex].quantity += 1;
            console.log(this.state.groceryCart[itemIndex]["quantity"]);
        } else {
            this.state.groceryCart.push(item);
        }
        console.log(this.state.groceryCart);
        this.setState({groceryCart: this.state.groceryCart});
        this.updatePrice(item.price);
    }
    render() {
        return (
            <div className="rootDiv">
                <div className="grocery-list-items">                    
                    {groceryData.map(item =>
                        <li key={item.id} className="list-item" onClick={() => this.handleItemClick(item)}>
                            <div className="item-container">
                                <figure>
                                    <img className="image" src={item.image} />
                                </figure>
                                <p>{item.item} <span>${this.priceFormat(item.price)}</span></p>                                
                            </div>
                        </li>                        
                    )}                
                </div>
                <GroceryCheckout items={this.state.groceryCart} total={this.state.total} />
            </div>
        );
    }
}

export default GroceryContainer;