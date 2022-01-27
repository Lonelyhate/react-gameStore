import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './cart/reducer';
import gamesRedusers from './games/reduser';

export const store = configureStore({
    reducer: {
        cart: cartReducers,
        game: gamesRedusers
    },
});
