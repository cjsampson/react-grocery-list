import expect from 'expect';
import deepFreeze from 'deep-freeze';
import data from './data/groceryData';

const incrementQuantity = (object) => {
    return Object.assign( {}, object, {
        quantity: 2
    });
    console.log(newObj);
}

const testIncrementQuantity = () => {
    const objBefore = {
        'id': 1,
        'item': 'bread',
        'price': 3.29,
        'image': '../images/bread.jpeg',
        'quantity': 1
    }
    const objAfter = {
        'id': 1,
        'item': 'bread',
        'price': 3.29,
        'image': '../images/bread.jpeg',
        'quantity': 2
    }

    deepFreeze(objBefore);

    expect(
        incrementQuantity(objBefore)
    ).toEqual(objAfter);
};

testIncrementQuantity();