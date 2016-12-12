import React, { Component } from 'react';

import groceryData from '../data/groceryData';


class App extends Component {
    constructor() {
        super(); 
        this.state = {
            items: groceryData
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {groceryData.map(item =>
                        <li key={item.id}>
                            <img src={item.image} />
                            {item.item}
                        </li>                        
                    )}
                </ul>
            </div>
        );
    }
}

export default App;