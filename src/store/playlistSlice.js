import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPlaylist from "../api";
export const INIT_STATE = {
    playlists: {},
    error: "",
    favoritesPlaylists: [],
    recentPlaylists: [],
    loading: false,
  };
const playlistSlice = createSlice({
  name: "playlist",
  initialState: INIT_STATE,
  reducers: {
    setplaylist(state, action) {
      if(action.payload.playlistId){        
        state.playlists[action.payload.playlistId] = action.payload.data;
    }else{
        state = action.payload
        return state
      }
    },

    setError(state, action) {
      state.error = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setplaylist, setLoading, setError } = playlistSlice.actions;
export default playlistSlice.reducer;

export const fetchPlaylist = (playlistId) => {
    
    return async function fetPlaylistThunk(dispatch, getState) {
        const state = getState();
    if (state.playlist.playlists[playlistId]) {
        
      const videosLen = state.playlists[playlistId].videos.length;
      dispatch(setLoading(true));
      try {
        const result = await getPlaylist(playlistId);
        dispatch(setError(""));
        if (videosLen === result.videos.length) return state.playlists;
        dispatch(
          setplaylist({
            playlistId,
            data: result,
          })
        );
      } catch (e) {
        console.log(e);
        dispatch(
          setError(e?.response?.data?.error?.message || "Something went wrong")
        );
      } finally {
        dispatch(setLoading(false));
      }
    }else{
        try {
            const result = await getPlaylist(playlistId);
            dispatch(setError(""));
            dispatch(
              setplaylist({
                playlistId:result.playlistId,
                data: result,
              })
            );
          } catch (e) {
            console.log(e);
            dispatch(
              setError(e?.response?.data?.error?.message || "Something went wrong")
            );
          } finally {
            dispatch(setLoading(false));
          }
    }
  };
};
