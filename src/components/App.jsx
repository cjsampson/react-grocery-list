import React, { Component } from 'react';

// import GroceryCheckout from './GroceryCheckout';

import groceryData from '../data/groceryData';
import '../styles/grocery.sass';


class App extends Component {
    constructor() {
        super(); 
        this.state = {
            items: groceryData,
            total: 0,
            list: []
        }
    }
    priceFormat = (price) => {
        return (this.state.total).toFixed(2);
    }
    updatePrice = (price) => {
        this.setState({ total: this.state.total += price});
    }
    handleItemClick = (item) => {
        this.state.list.push(item);
        this.setState({list: this.state.list});
        console.log(this.priceFormat(this.state.total));
        this.updatePrice(item.price);
    }
    render() {
        return (
            <div className="grocery-list-items">
                <div className="total">
                    <span>{this.priceFormat(this.state.total)}</span>
                </div>
                {groceryData.map(item =>
                    <li key={item.id} className="list-item" onClick={() => this.handleItemClick(item)}>
                        <div className="item-container">
                            <figure>
                                <img className="image" src={item.image} />
                            </figure>
                            <p>{item.item} : <span>{item.price}</span></p>                                
                        </div>
                    </li>                        
                )}
                
                
            </div>
        );
    }
}

export default App;