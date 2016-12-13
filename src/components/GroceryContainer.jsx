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
            list: []
        }
    }
    priceFormat = (price) => {
        return (price).toFixed(2);
    }
    updatePrice = (price) => {
        this.setState({ total: this.state.total += price});
    }
    doesItemExists = (item) => {
        console.log(this.state.list.includes(item));
    }
    handleItemClick = (item) => {
        this.doesItemExists(item);
        this.state.list.push(item);
        this.setState({list: this.state.list});
        console.log(this.priceFormat(this.state.total));
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
                <GroceryCheckout items={this.state.list} total={this.state.total} />
            </div>
        );
    }
}

export default GroceryContainer;