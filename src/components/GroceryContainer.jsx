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

    increaseQuantity = (item, val = null) => {
        let index = this.state.groceryCart.indexOf(item);
        this.state.groceryCart[index].quantity += 1;
        this.setState({groceryCart: this.state.groceryCart });
        this.updatePrice(item.price);
    }

    decreaseQuantity = (item) => {
        let index = this.state.groceryCart.indexOf(item);
        if( this.state.groceryCart[index].quanity === 1) {
            this.state.groceryCart.splice(index, 1);
        } else {
            this.state.groceryCart[index].quantity -= 1;
        }
        this.state.groceryCart[index].quantity -= 1;
        this.setState({groceryCart: this.state.groceryCart });
        this.updatePrice(item.price);

    }

    sampleReduce = item => {
        let total = this.state.groceryCart.reduce( (sum, current) => 
            sum + (current.quantity * current.price), 0
        )
        console.log(total.toFixed(2));
    }

    render() {
        return (
            <div className="rootDiv">
                <div className="grocery-list-items">                    
                    {this.state.items.map(item =>
                        <li key={item.id} 
                            className="list-item" 
                            onClick={ () => { this.handleItemClick(item), this.sampleReduce(item) }}
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