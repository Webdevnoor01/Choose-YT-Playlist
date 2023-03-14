import { createSlice } from "@reduxjs/toolkit";


// TODO: I will work later in thsi slice
const favoritePlaylistSlice = createSlice({
    name: "favoritePlaylists",
    initialState: [],
    reducers: {
        setFavPlaylist: (state, action) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
    },
});