import { createSlice } from "@reduxjs/toolkit"

const WishListSlice = createSlice(
    {
        name: 'wishlist',
        initialState: [],
        reducers: {
            addToWishList: (state, action) => {
                state.push(action.payload)
            },

            removeFromWishList: (state, action) => {
                return action.payload
            },
        }
    }
);

export const WishListActions = WishListSlice.actions;

export default WishListSlice;