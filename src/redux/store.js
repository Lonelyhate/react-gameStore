import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './cart/reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducers,
    },
});
