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

    handleItemClick = (item) => {
        let index = this.state.groceryCart.indexOf(item);
        if( this.state.groceryCart.includes(item) ) {
            if( this.state.groceryCart[index].quantity < 1)
                this.state.groceryCart[index].quantity += 2;
            else
                this.state.groceryCart[index].quantity += 1;
        } else {
            this.state.groceryCart.push(item);
        }

        
        this.setState({groceryCart: this.state.groceryCart});
        this.updatePrice(item.price);
    }

    increaseQuantity = (item) => {
        console.log(this.state.groceryCart[item]);
    }

    decreaseQuantity = (item) => {
        console.log("decrease item");
    }

    render() {
        return (
            <div className="rootDiv">
                <div className="grocery-list-items">                    
                    {this.state.items.map(item =>
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
                <GroceryCheckout 
                    items={this.state.groceryCart}
                    total={this.state.total}
                    increase={this.increaseQuantity}
                    decrease={this.decreaseQuantity}
                />
            </div>
        );
    }
}

export default GroceryContainer;