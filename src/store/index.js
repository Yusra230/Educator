import { configureStore, createSlice } from "@reduxjs/toolkit";
import CourseSlice from "./courseSlice";

const store = configureStore(
    {
        reducer: {
            courses: CourseSlice.reducer,
        }
    }
)

export default store;