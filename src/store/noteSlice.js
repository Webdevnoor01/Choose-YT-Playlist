import { createSlice } from "@reduxjs/toolkit"

const noteSlice = createSlice({
    name: "notes",
    initialState: {

    },
    reducers: {
        setNote: (state, action) => {
            state[action.payload.noteId] = action.payload;

        }
    }
})

export const { setNote } = noteSlice.actions
export default noteSlice.reducer