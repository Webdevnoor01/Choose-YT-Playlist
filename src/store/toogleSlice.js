import { createSlice } from "@reduxjs/toolkit"


const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        sidebar: false,
        userProfileToggle: false,
        addPlaylistToggle: false
    },
    reducers: {
        setSidebarToggle: (state, action) => {
            state.sidebar = !state.sidebar
        },
        setUserProfileToggle: (state, action) => {
            state.userProfileToggle = action.payload
        },
        setAddPlaylistToggle: (state, action) => {
            state.addPlaylistToggle = action.payload
        }
    }
})

export const { setSidebarToggle, setUserProfileToggle, setAddPlaylistToggle } = toggleSlice.actions

export default toggleSlice.reducer