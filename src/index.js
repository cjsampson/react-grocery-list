import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';


const store = createStore(reducer);

import GroceryContainer from './components/GroceryContainer';
console.log(store.getState());
render(
    <Provider store={store} >
        <GroceryContainer addme={(foodItem) => store.dispatch({ type: 'ADD_ITEM', payload: foodItem})} />
    </Provider>, 
document.getElementById('app'));