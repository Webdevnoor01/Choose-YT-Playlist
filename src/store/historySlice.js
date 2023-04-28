import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: "history",
    initialState: {
        items: {},
        searchResult: {
            resultError: {
                isErr: false,
                message: "No playlist found"
            },
            items: {}
        }
    },
    reducers: {
        setHistory: (state, action) => {
            if (state[action.payload.videoId]) return
            state.items[action.payload.videoId] = action.payload
        },
        deleteHistory: (state, action) => {
            if (!action.payload.videoId) return
            delete state[action.payload.videoId]
        },
        findVideos: (state, action) => {
            if (Object.keys(state.searchResult.items).length === 0) {
                state.searchResult.resultError.isErr = true
            } else {
                state.searchResult.resultError.isErr = false

            }

            const result = Object.values(state.items).map(video => {
                if (video.title.toLowerCase().includes(action.payload.toLowerCase())) {
                    const videoObj = {
                        playlistId: video.playlistId,
                        videoTitle: video.title,
                        videoThumbnail: video.thumbnail,
                        channelName: video.channelName
                    }
                    if (!state.searchResult.items[video.videoId]) {

                        state.searchResult.items[video.videoId] = videoObj
                    }
                }
            })
        },
        resetHistoryResult: (state, action) => {
            state.searchResult.items = {}
        }
    }
})

export const { setHistory, deleteHistory, findVideos, resetHistoryResult } = historySlice.actions

export default historySlice.reducer