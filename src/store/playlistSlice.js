import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPlaylist from "../api";
export const INIT_STATE = {
    error: "",
    loading: false,
    items: {

    },
    searchResult: {
        resultError: {
            isErr: false,
            message: "No playlist found"
        },
        items: {}
    }
};

export const fetchPlaylist = createAsyncThunk("user/playlist",
    async(userId) => {
        const response = await getPlaylist(userId)
        if (response.error) throw new Error(response.message)
        return response
    }
)

const playlistSlice = createSlice({
    name: "playlist",
    initialState: INIT_STATE,
    reducers: {
        removePlaylist: (state, action) => {
            console.log(state.items)
            if (!action.payload.playlistId) return
            delete state.items[action.payload.playlistId]
        },
        setAsFaroite: (state, action) => {
            state.items[action.payload].isFavorite = true
        },
        removeFromFavorite: (state, action) => {
            state.items[action.payload].isFavorite = false
        },
        findPlaylistById: (state, action) => {
            if (Object.keys(state.items).length === 0) {
                state.searchResult.resultError.isErr = true
            } else {
                state.searchResult.resultError.isErr = false

            }
            const result = Object.keys(state.items).filter(playlistId => {
                if (playlistId.includes(action.payload)) {
                    const playlist = state.items[playlistId]
                    const playlistObj = {
                        playlistId: playlist.playlistId,
                        playlistTitle: playlist.playlistTitle,
                        playlistThumbnail: playlist.playlistThumbnail,
                        channelName: playlist.channelTitle
                    }
                    if (!state.searchResult.items[playlistId]) {

                        state.searchResult.items[playlistId] = playlistObj
                    }
                }
            })
        },
        findPlaylistByTitle: (state, action) => {
            if (Object.keys(state.items).length === 0) {
                state.searchResult.resultError.isErr = true
            } else {
                state.searchResult.resultError.isErr = false

            }
            const result = Object.values(state.items).filter(playlist => {
                const lowerCaseTitle = playlist.playlistTitle.toLowerCase()
                if (lowerCaseTitle.includes(action.payload.toLowerCase())) {
                    const playlistObj = {
                        playlistId: playlist.playlistId,
                        playlistTitle: playlist.playlistTitle,
                        playlistThumbnail: playlist.playlistThumbnail,
                        channelName: playlist.channelTitle
                    }
                    if (!state.searchResult.items[playlist.playlistId]) {

                        state.searchResult.items[playlist.playlistId] = playlistObj
                    }
                }
            })
        },
        resetSearchResult: (state, action) => {
            state.searchResult.items = {}
        }

    },
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

export const { removePlaylist, setAsFaroite, removeFromFavorite, findPlaylistById, resetSearchResult, findPlaylistByTitle } = playlistSlice.actions;
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