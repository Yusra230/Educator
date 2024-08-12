import { createSlice } from "@reduxjs/toolkit"
import courses from "../data/courses"

const CourseSlice = createSlice(
    {
        name: 'courses',
        initialState: courses,
        reducers: {
            filteredCourses: (state, action) => {
                return action.payload
            }
        }
    }
);

export const courseActions = CourseSlice.actions;

export default CourseSlice;