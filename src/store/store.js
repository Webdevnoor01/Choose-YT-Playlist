import { configureStore } from "@reduxjs/toolkit"

// Slice: 
import toggleSlice from "./toogleSlice"
import modeSlice from "./modeSlice"
import userSlice from "./userSlice"
import playlsitIdSlice from "./playlsitIdSlice"
import playlistSlice from "./playlistSlice"
const store = configureStore({
    reducer: {
        toggle: toggleSlice,
        mode: modeSlice,
        user: userSlice,
        playlistId: playlsitIdSlice,
        playlist: playlistSlice
    }
})

export default store