import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: "history",
    initialState: {},
    reducers: {
        setHistory: (state, action) => {
            if (state[action.payload.videoId]) return
            console.log(action)
            state[action.payload.videoId] = action.payload
        },
        deleteHistory: (state, action) => {
            if (!action.payload.videoId) return
            delete state[action.payload.videoId]
        }
    }
})

export const { setHistory, deleteHistory } = historySlice.actions

export default historySlice.reducer