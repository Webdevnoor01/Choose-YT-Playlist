import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPlaylist from "../api";
export const INIT_STATE = {
    error: "",
    loading: false,
    items: {

    }
};

export const fetchPlaylist = createAsyncThunk("user/playlist",
    async(userId) => {
        console.log("apiCalled thunk")
        const response = await getPlaylist(userId)
        console.log("response: ", response)
        if (response.error) throw new Error(response.message)
        return response
    }
)

const playlistSlice = createSlice({
    name: "playlist",
    initialState: INIT_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPlaylist.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPlaylist.fulfilled, (state, action) => {
                state.items[action.payload.playlistId] = action.payload;
                state.error = null;
                state.loading = false;
                return state
            }).addCase(fetchPlaylist.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
    }
});

export const { setplaylist, setLoading, setError } = playlistSlice.actions;
export default playlistSlice.reducer;



// export const fetchPlaylist = (playlistId) => {
//     return async function fetPlaylistThunk(dispatch, getState) {
//         const state = getState();
//         console.log("fetchPlaylist: ", state)
//         if (state.playlist.items[playlistId]) {
//             const videosLen = state.playlists.items[playlistId].videos.length;
//             dispatch(setLoading(true));
//             try {
//                 const result = await getPlaylist(playlistId);
//                 dispatch(setError(""));
//                 if (videosLen === result.videos.length) return state.playlists;
//                 dispatch(
//                     setplaylist({
//                         playlistId,
//                         data: result,
//                     })
//                 );
//             } catch (e) {
//                 console.log(e);
//                 dispatch(
//                     setError(`${e?.response?.data?.error?.message}` || "Something went wrong")
//                 );
//             } finally {
//                 dispatch(setLoading(false));
//             }
//         } else {
//             try {
//                 const result = await getPlaylist(playlistId);
//                 dispatch(setError(""));
//                 dispatch(
//                     setplaylist({
//                         playlistId: result.playlistId,
//                         data: result,
//                     })
//                 );
//             } catch (e) {
//                 console.log(e);
//                 dispatch(
//                     setError(`${e?.response?.data?.error?.message}` || "Something went wrong")
//                 );
//             } finally {
//                 dispatch(setLoading(false));
//             }
//         }
//     };
// };