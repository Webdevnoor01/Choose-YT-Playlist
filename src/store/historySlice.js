import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: "history",
    initialState: {},
    reducers: {
        setHistory: (state, actions) => {},
        deletHistory: (state, actions) => {}
    }
})

export const { setHistory, deletHistory } = historySlice.actions

export default historySlice.reducer