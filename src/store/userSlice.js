import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        userBio: "",
        playlists: [],
        history: [],
        notes: []
    },
    reducers: {
        setUserProfile: (state, action) => {
            console.log("payload: ", action)
            state = {
                ...state,
                ...action.payload
            }
            return state;
        }
    }
})

export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer