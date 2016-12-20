const groceryCartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log(state);
            return [
                ...state,
                action.payload
            ];
        case 'REMOVE_ITEM':
            return 'REMOVE ITEM';
        default:
            return state;
    }
}

export default groceryCartReducer;