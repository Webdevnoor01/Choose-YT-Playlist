import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlistSlice";
import { INIT_STATE } from "./playlistSlice";
import { action, createStore, thunk, useStoreState } from "easy-peasy";
// const state = useStoreState((state) => state?.playlist);
import getPlaylist from "../api";
// const store = configureStore({
//     reducer:{
//         playlist:playlistReducer
//     }
// })
// export const INIT_STATE = {
//   playlists: {},
//   error: "",
//   favoritesPlaylists: [],
//   recentPlaylists: [],
//   loading: false,
// };
const store = createStore({
  playlist: INIT_STATE,
  setPlaylist: action((state, payload) => {
    if (payload.playlistId) {
      state.playlist.playlists[payload.playlistId] = payload.data;
    } else {
      state = {
        playlist: {
          ...payload,
        },
      };
      return state;
    }
  }),
  setError: action((state, payload) => {
    state.playlist.error = payload;
  }),

  setLoading: action((state, payload) => {
    state.playlist.loading = payload;
  }),
  fetchPlaylist: thunk(async (action, payload) => {
    console.log(action);
    console.log(payload);
    if (payload.state.playlist.playlists[payload.playlistId]) {
      try {
        const videosLen = state?.playlists[payload.playlistId].videos.length;
        action.setLoading(true);
        const result = await getPlaylist(playlistId);
        action.setError("");

        if (videosLen === result.videos.length) return state.playlists;
        action.setPlaylist({
          playlistId,
          data: result,
        });
      } catch (e) {
        console.log(e);
        action.setError(e?.response?.data?.error?.message || e);
      } finally {
        action.setLoading(false);
      }
    } else {
      try {
        action.setLoading(true);
        const data = await getPlaylist(payload.playlistId);
        action.setPlaylist({
          playlistId: payload.playlistId,
          data,
        });
        action.setError("");
      } catch (e) {
        action.setError(e?.response?.data?.error?.message || e);
      } finally {
        action.setLoading(false);
      }
    }
  }),
});

export default store;
