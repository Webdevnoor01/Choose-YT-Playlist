import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import getPlaylist from "../api";
import filterPlaylistByProperty from "../api/filterPlaylistByProperty";
import updatePlaylist from "../api/updatePlaylist";
export const INIT_STATE = {
  error: "",
  loading: false,
  updateLoading:false,
  items: {},
  searchResult: {
    loading: false,
    resultError: {
      isErr: false,
      message: "No playlist found",
    },
    items: {},
  },
  id:""
};

export const fetchPlaylist = createAsyncThunk(
  "user/playlist",
  async (playlistId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await getPlaylist(playlistId);
      // const playlist = await createPlaylist()
      if (response.error) throw new Error(response.message);
      return fulfillWithValue(response);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getIdOfPlaylist = createAsyncThunk(
  "user/playlist/filter",
  async (playlistId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await filterPlaylistByProperty({
        key:"playlistId",
        value:playlistId
      });
      // const playlist = await createPlaylist()
      if (response.error) throw new Error(response.message);
      return fulfillWithValue(response);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const updatePlaylistIntoStore = createAsyncThunk(
  "user/playlist/updateStore",
  async (playlistId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await getPlaylist(playlistId);
      if (response.error) throw new Error(response.message);
      return fulfillWithValue(response);
    } catch (error) {
      console.log("updatePlaylistIntoStore-slice-error: ", error)
     rejectWithValue(error);
    }
  }
);

// export const updatePlaylistIntoDB = createAsyncThunk(
//   "user/playlist/updateDB",
//   async (payload, { fulfillWithValue, rejectWithValue }) => {
//     console.log("payload: ", payload)
//     try {
//       const response = await updatePlaylist(payload.id, payload);
//       console.log("response: ", response)
//       return fulfillWithValue(response);
//     } catch (error) {
//       console.log("updatePlaylistIntoDB-slice-error: ", error)
//       rejectWithValue(error);
//     }
//   }
// );

const playlistSlice = createSlice({
  name: "playlist",
  initialState: INIT_STATE,
  reducers: {
    setPlaylist: (state, action) => {
      state.items = action.payload;
    },
    removePlaylist: (state, action) => {
      if (!action.payload.playlistId) return;
      delete state.items[action.payload.playlistId];
    },
    setPlaylistError: (state, action) => {
      state.error = "";
    },
    setPlsylitLoading: (state, action) => {
      state.loading = action.payload;
    },

    setAsFaroite: (state, action) => {
      state.items[action.payload].isFavorite = true;
    },

    removeFromFavorite: (state, action) => {
      state.items[action.payload].isFavorite = false;
    },

    findPlaylistById: (state, action) => {
      if (Object.keys(state.items).length === 0) {
        state.searchResult.resultError.isErr = true;
      } else {
        state.searchResult.resultError.isErr = false;
      }
      const result = Object.keys(state.items).filter((playlistId) => {
        if (playlistId.includes(action.payload)) {
          const playlist = state.items[playlistId];
          const playlistObj = {
            playlistId: playlist.playlistId,
            playlistTitle: playlist.playlistTitle,
            playlistThumbnail: playlist.playlistThumbnail,
            channelName: playlist.channelTitle,
          };
          if (!state.searchResult.items[playlistId]) {
            state.searchResult.items[playlistId] = playlistObj;
          }
        }
      });
    },

    findPlaylistByTitle: (state, action) => {
      if (Object.keys(state.items).length === 0) {
        state.searchResult.resultError.isErr = true;
      } else {
        state.searchResult.resultError.isErr = false;
      }
      const result = Object.values(state.items).filter((playlist) => {
        const lowerCaseTitle = playlist.playlistTitle.toLowerCase();
        if (lowerCaseTitle.includes(action.payload.toLowerCase())) {
          const playlistObj = {
            playlistId: playlist.playlistId,
            playlistTitle: playlist.playlistTitle,
            playlistThumbnail: playlist.playlistThumbnail,
            channelName: playlist.channelTitle,
          };
          if (!state.searchResult.items[playlist.playlistId]) {
            state.searchResult.items[playlist.playlistId] = playlistObj;
          }
        }
      });
    },

    findRecentPlaylistByTitle: (state, action) => {
      const recentPlaylist = Object.values(state.items).filter(
        (playlist, i) =>
          playlist.playlistId === action.payload.recentPlaylistIds[i]
      );
      const result = recentPlaylist.filter((playlist) => {
        const lowerCaseTitle = playlist.playlistTitle.toLowerCase();
        if (lowerCaseTitle.includes(action.payload.search.toLowerCase())) {
          const playlistObj = {
            playlistId: playlist.playlistId,
            playlistTitle: playlist.playlistTitle,
            playlistThumbnail: playlist.playlistThumbnail,
            channelName: playlist.channelTitle,
          };
          if (!state.searchResult.items[playlist.playlistId]) {
            state.searchResult.items[playlist.playlistId] = playlistObj;
          }
        }
      });
    },

    findFavoritePlaylistByTitle: (state, action) => {
      const favoritePlaylistArr = Object.values(state.items).filter(
        (playlist) => playlist.isFavorite
      );

      favoritePlaylistArr.filter((playlist) => {
        if (
          playlist.playlistTitle
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ) {
          const playlistObj = {
            playlistId: playlist.playlistId,
            playlistTitle: playlist.playlistTitle,
            playlistThumbnail: playlist.playlistThumbnail,
            channelName: playlist.channelTitle,
          };
          if (!state.searchResult.items[playlist.playlistId]) {
            state.searchResult.items[playlist.playlistId] = playlistObj;
          }
        }
      });
    },

    findVideosByTitle: (state, action) => {
      state.searchResult.loading = true;
      const playlistIds = Object.keys(state.items);
      const videosArr = [];
      playlistIds.map((playlistId) => {
        Object.values(state.items[playlistId].videos).map((video, index) => {
          const videoObj = {
            playlistId: playlistId,
            videoId: video.videoContentDetails.videoId,
            videoTitle: video.videoTitle,
            videoThumbnail: video.videoThumbnail,
            channelName: state.items[playlistId].channelTitle,
            index: index,
          };
          videosArr.push(videoObj);
        });
      });
      state.searchResult.loading = false;
      videosArr.filter((video) => {
        if (
          video.videoTitle.toLowerCase().includes(action.payload.toLowerCase())
        ) {
          state.searchResult.items[video.videoId] = video;
        }
      });
    },
    resetSearchResult: (state, action) => {
      state.searchResult.items = {};
    },
    resetPlaylist: (state, action) => {
      state = INIT_STATE;
    },
  },
  extraReducers: {
    [fetchPlaylist.pending]: (state, action) => {
      state.loading = true;
      state.error = {
        name: "Success",
        message: "Successfully fetched playlist data",
      };
    },
    [fetchPlaylist.fulfilled]: (state, action) => {
      state.items[action.payload.playlistId] = action.payload;
      state.error = {
        name: "Success",
        message: "Successfully fetched playlist data",
      };
      state.loading = false;
      return state;
    },
    [fetchPlaylist.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getIdOfPlaylist.pending]:(state, action )=> {
    },
    [getIdOfPlaylist.fulfilled]:(state, action )=> {
      state.id = action.payload.id;
    },
    [getIdOfPlaylist.rejected]:(state, action )=> {
      state.error = action.payload;
    },
    [updatePlaylistIntoStore.pending]: (state, action) => {
      state.updateLoading = true
    },
    [updatePlaylistIntoStore.fulfilled] : (state, action) => {
        let currentLength = state.items[action.payload.playlistId].videos.length;
        let updatedLength = action.payload.videos.length
        if(currentLength === updatedLength){
          state.error = "Playlist is already updated"
        }
        if(currentLength < updatedLength) {
            let updatedVideos = action.payload.videos.splice(currentLength)
            state.items[action.payload.playlistId].videos.push(...updatedVideos)
            const payload = {
              id:state.id,
              data:{
                videos:[...action.payload.videos, ...updatedVideos]
              }
            }
            state.id = ""
            updatePlaylist(payload.id, payload)
            state.updateLoading = false;
        }

    },

    [updatePlaylistIntoStore.rejected]:(state, action) => {
      state.updateLoading = false;
      state.error = action.payload
    },
  },
});
export const {
  setPlaylist,
  removePlaylist,
  setPlaylistError,
  setAsFaroite,
  removeFromFavorite,
  findPlaylistById,
  resetSearchResult,
  findPlaylistByTitle,
  findRecentPlaylistByTitle,
  findFavoritePlaylistByTitle,
  findVideosByTitle,
  resetPlaylist,
  setPlsylitLoading,
} = playlistSlice.actions;
export default playlistSlice.reducer;
