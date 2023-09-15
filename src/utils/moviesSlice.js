import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice(
    {
        name: "movies",
        initialState: {
            playingMovies: null,
            logo: null,
        },
        reducers: {
            addPlayingMovies: (state, action) =>{
                state.playingMovies = action.payload;
            },
            addLogo: (state, action) =>{
                state.logo = action.payload;
            },
            addVedio: (state, action) =>{
                state.Vedio = action.payload;
            }
        }
    }
)

export const { addPlayingMovies , addLogo , addVedio } = moviesSlice.actions

export default moviesSlice.reducer;

