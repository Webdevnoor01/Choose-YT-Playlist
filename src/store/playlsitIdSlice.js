import { createSlice } from "@reduxjs/toolkit"


const playlistIdSlice = createSlice({
    name: "playlistId",
    initialState: "",
    reducers: {
        setPlaylistId: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const { setPlaylistId } = playlistIdSlice.actions
export default playlistIdSlice.reducer