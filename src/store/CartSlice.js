import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: [],
        reducers: {
            addToCart: (state, action) => {
                 state.push(action.payload)
            },

            removeFromCart: (state, action) => {
               return action.payload
           },
        }
    }
);

export const cartActions = cartSlice.actions;

export default cartSlice;