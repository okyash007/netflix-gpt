import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import GPTreducer from "./GPTslice"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: GPTreducer,
        }
    }
)

export default appStore;