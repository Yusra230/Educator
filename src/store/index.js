import { configureStore, createSlice } from "@reduxjs/toolkit";
import CourseSlice from "./courseSlice";
import cartSlice from "./CartSlice";
import WishListSlice from "./WiishListSlice";

const store = configureStore(
    {
        reducer: {
            courses: CourseSlice.reducer,
            cart: cartSlice.reducer,
            wishlist : WishListSlice.reducer,
        }
    }
)

export default store;