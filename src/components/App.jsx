import React, { Component } from 'react';

import groceryData from '../data/groceryData';
import '../styles/grocery.sass';


class App extends Component {
    constructor() {
        super(); 
        this.state = {
            items: groceryData,
            total: 0,
        }
    }
    updatePrice = (price) => {
        console.log(price);
    }
    render() {
        return (
            <div>
                <span>{this.state.total}</span>
                <ul>
                    {groceryData.map(item =>
                        <li key={item.id} className="list-item" onClick={() => this.updatePrice(item.price)}>
                            <div className="item-container">
                                <img className="image" src={item.image} />
                                <p>{item.item} : <span>{item.price}</span></p>                                
                            </div>
                        </li>                        
                    )}
                </ul>
            </div>
        );
    }
}

export default App;