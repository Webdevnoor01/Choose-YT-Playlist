import { configureStore } from "@reduxjs/toolkit"

// Slice: 
import toggleSlice from "./toogleSlice"
import modeSlice from "./modeSlice"
const store = configureStore({
    reducer: {
        toggle: toggleSlice,
        mode: modeSlice
    }
})

export default store