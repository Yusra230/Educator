import { configureStore, createSlice } from "@reduxjs/toolkit";
import CourseSlice from "./courseSlice";
import cartSlice from "./CartSlice";

const store = configureStore(
    {
        reducer: {
            courses: CourseSlice.reducer,
            cart: cartSlice.reducer,
        }
    }
)

export default store;