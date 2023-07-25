import  { createSlice  } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    initialState:{},
    name:"navigation",
    reducers:{
        setNavigation: (state, action) => {
            console.log("payload", action.payload)
            state = action.payload
            return state
        }
    }
})

export const { setNavigation } = navigationSlice.actions
export default navigationSlice.reducer