import { configureStore } from "@reduxjs/toolkit"
<<<<<<< HEAD

// Slice: 
import toggleSlice from "./toogleSlice"
import modeSlice from "./modeSlice"
const store = configureStore({
    reducer: {
        toggle: toggleSlice,
        mode: modeSlice
=======
import playlistReducer from "./playlistSlice"
const store = configureStore({
    reducer:{
        playlist:playlistReducer
>>>>>>> main
    }
})

export default store