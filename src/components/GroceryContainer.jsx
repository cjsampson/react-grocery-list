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
        this.setState({ total: this.state.total += price });
    }

    render() {
        return (
            <div className="rootDiv">
                <div className="grocery-list-items">                 
                    {this.state.items.map(item =>
                        <li key={item.id} 
                            className="list-item" 
                            onClick={ () => this.props.addme(item) }

                        >
                            <div className="item-container">
                                <figure>
                                    <img 
                                        className="image" 
                                        src={item.image} 
                                    />
                                </figure>
                                <p>{item.item} <span>${this.priceFormat(item.price)}</span></p>                                
                            </div>
                        </li>                        
                    )}                
                </div>
            </div>
        );
    }
}

export default GroceryContainer;