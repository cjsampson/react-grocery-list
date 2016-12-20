let nextCartItem = 0;

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    id: nextCartItem++,
    foodItem: item
});

export const removeItem = (item) => ({
    type: 'REMOVE_ITEM',
    id: nextCartItem++
});