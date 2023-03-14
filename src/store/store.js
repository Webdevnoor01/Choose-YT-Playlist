import { configureStore } from "@reduxjs/toolkit"

// Slice: 
import toggleSlice from "./toogleSlice"
import modeSlice from "./modeSlice"
import userSlice from "./userSlice"
import playlsitIdSlice from "./playlsitIdSlice"
import playlistSlice from "./playlistSlice"
import noteSlice from "./noteSlice"
import recentPlaylistSlice from "./recentPlaylistSlice"
const store = configureStore({
    reducer: {
        toggle: toggleSlice,
        mode: modeSlice,
        user: userSlice,
        playlistId: playlsitIdSlice,
        playlist: playlistSlice,
        notes: noteSlice,
        recentPlaylists: recentPlaylistSlice
    }
})

export default store