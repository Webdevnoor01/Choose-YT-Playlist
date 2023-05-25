import { createSlice } from "@reduxjs/toolkit"

export const USER_INITIAL_STATE = {
    name: "",
    email: "",
    isAuth: false,
    playlists: [],
    history: [],
    notes: []
}
const userSlice = createSlice({
    name: "user",
    initialState: USER_INITIAL_STATE,
    reducers: {
        setUserProfile: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.Name
            state.isAuth = action.payload.isAuth
                // return state;
        },
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        }
    }
})

export const { setUserProfile, setIsAuth } = userSlice.actions;

export default userSlice.reducer