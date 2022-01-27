import { createSlice } from '@reduxjs/toolkit';

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
        itemsSum: 0
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload);
            state.itemsSum = getTotalPrice(state.itemsInCart)
            
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter((game) => game.id !== action.payload);
            state.itemsSum = getTotalPrice(state.itemsInCart)
        },
        
    },
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
