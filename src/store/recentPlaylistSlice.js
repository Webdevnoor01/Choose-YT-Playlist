import { createSlice } from "@reduxjs/toolkit"

const recentPlaylistSlice = createSlice({
    name: "recentPlaylist",
    initialState: {},
    reducers: {
        setRecentPlaylist: (state, action) => {
            state[action.payload.playlistId] = action.payload
        },
        removeRecentPlaylist: (state, action) => {
            if (!state[action.payload]) return
            delete state[action.payload]
        },
        findRecentPlaylistIds: (state, action) => {
            return Object.keys(state)
        },
        resetRecentPlaylist: (state, action)=> {
            state = {}
        }
    }
})

export const { setRecentPlaylist, removeRecentPlaylist, findRecentPlaylistIds, resetRecentPlaylist } = recentPlaylistSlice.actions

export default recentPlaylistSlice.reducer