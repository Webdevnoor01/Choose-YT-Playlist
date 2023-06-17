import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit";

import getPlaylist from "../api";
export const INIT_STATE = {
    error: "",
    loading: false,
    items: {},
    searchResult: {
        loading: false,
        resultError: {
            isErr: false,
            message: "No playlist found"
        },
        items: {}
    }
};

export const fetchPlaylist = createAsyncThunk("user/playlist",
    async(userId, { rejectWithValue, fulfillWithValue}) => {
        try {
            
            const response = await getPlaylist(userId)
                // const playlist = await createPlaylist()
            if (response.error) throw new Error(response.message)
            return fulfillWithValue(response)
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

const playlistSlice = createSlice({
    name: "playlist",
    initialState: INIT_STATE,
    reducers: {
        setPlaylist: (state, action) => {
            state.items= action.payload
        },
        removePlaylist: (state, action) => {
            if (!action.payload.playlistId) return
            delete state.items[action.payload.playlistId]
        },
        setPlaylistError: (state, action) => {
            state.error = "";
        },
        setPlsylitLoading:(state, action) =>{
            state.loading = action.payload
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

        findRecentPlaylistByTitle: (state, action) => {
            const recentPlaylist = Object.values(state.items).filter((playlist, i) => playlist.playlistId === action.payload.recentPlaylistIds[i])
            const result = recentPlaylist.filter((playlist) => {
                const lowerCaseTitle = playlist.playlistTitle.toLowerCase()
                if (lowerCaseTitle.includes(action.payload.search.toLowerCase())) {
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

        findFavoritePlaylistByTitle: (state, action) => {
            const favoritePlaylistArr = Object.values(state.items).filter((playlist) => playlist.isFavorite)

            favoritePlaylistArr.filter((playlist) => {
                if (playlist.playlistTitle.toLowerCase().includes(action.payload.toLowerCase())) {

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

        findVideosByTitle: (state, action) => {
            state.searchResult.loading = true
            const playlistIds = Object.keys(state.items)
            const videosArr = []
            playlistIds.map(playlistId => {
                Object.values(state.items[playlistId].videos).map((video, index) => {

                    const videoObj = {
                        playlistId: playlistId,
                        videoId: video.videoContentDetails.videoId,
                        videoTitle: video.videoTitle,
                        videoThumbnail: video.videoThumbnail,
                        channelName: state.items[playlistId].channelTitle,
                        index: index
                    }
                    videosArr.push(videoObj)


                })
            })
            state.searchResult.loading = false
            videosArr.filter(video => {
                if (video.videoTitle.toLowerCase().includes(action.payload.toLowerCase())) {
                    state.searchResult.items[video.videoId] = video
                }
            })

        },
        resetSearchResult: (state, action) => {
            state.searchResult.items = {}
        },
        resetPlaylist: (state, action) =>{
            state = INIT_STATE
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlaylist.pending, (state, action) => {
                state.loading = true;
                state.error = {
                    name: "Success",
                    message: "Successfully fetched playlist data"
                };
            })
            .addCase(fetchPlaylist.fulfilled, (state, action) => {
                
                state.items[action.payload.playlistId] = action.payload;
                state.error = {
                    name: "Success",
                    message: "Successfully fetched playlist data"
                };;
                state.loading = false;
                return state
            }).addCase(fetchPlaylist.rejected, (state, action) => {
                state.error = action.error;
                state.loading = false;
            })
    }
});

export const { setPlaylist, removePlaylist, setPlaylistError, setAsFaroite, removeFromFavorite, findPlaylistById, resetSearchResult, findPlaylistByTitle, findRecentPlaylistByTitle, findFavoritePlaylistByTitle, findVideosByTitle, resetPlaylist, setPlsylitLoading } = playlistSlice.actions;
export default playlistSlice.reducer;