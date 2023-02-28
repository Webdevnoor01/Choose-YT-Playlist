import { createSlice } from "@reduxjs/toolkit"


const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        sidebar: false,
        userProfileToggle: false
    },
    reducers: {
        setSidebarToggle: (state, action) => {
            state.sidebar = !state.sidebar
        },
        setUserProfileToggle: (state, action) => {
            state.userProfileToggle = action.payload
        },
    }
})

export const { setSidebarToggle, setUserProfileToggle } = toggleSlice.actions

export default toggleSlice.reducer