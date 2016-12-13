import React, { Component } from 'react';

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
    updatePrice = (price) => {
        this.setState({ total: this.state.total += price});
    }
    handleItemClick = (item) => {
        this.state.list.push(item);
        this.setState({list: this.state.list});
        console.log(this.state.list);
        this.updatePrice(item.price);
    }
    render() {
        return (
            <div>
                <span>{this.state.total}</span>
                <ul>
                    {groceryData.map(item =>
                        <li key={item.id} className="list-item" onClick={() => this.handleItemClick(item)}>
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