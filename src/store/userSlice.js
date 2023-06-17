import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getUser from "../api/getUser";
import updatePlaylistItems from "../api/updatePlaylistItems";

export const USER_INITIAL_STATE = {
  id: 0,
  name: "",
  email: "",
  isAuth: false,
  playlists: {
    items: [],
  },
  history: {
    items: [],
  },
  notes: {
    items: [],
  },
};

export const setPlaylistItems = createAsyncThunk(
  "user/updatePlaylistItems",
  async (data) => {
    const { user } = await getUser(data.token);
    console.log("user: ", data)
    const newPlaylistItems = [...user.playlist.items, data.playlistId];
    console.log("newItems: ", newPlaylistItems, )
    const updatePlsylist = await updatePlaylistItems(
      user.id,
      {
        playlist: {
          items: newPlaylistItems,
        },
      },
      data.token
    );

    return updatePlsylist.playlistItems;
    
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: USER_INITIAL_STATE,
  reducers: {
    setUserProfile: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.Name;
      state.isAuth = action.payload.isAuth;
      state.playlists = action.payload.playlist;
      state.history = action.payload.history;
      state.notes = action.payload.notes;
      // return state;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUserPlaylistItems: (state, action) => {
      state.playlists.items = action.payload;
    },
    resetUser: (state, action) =>{
      state = USER_INITIAL_STATE
    }
  },
});

export const { setUserProfile, setIsAuth, setUserPlaylistItems, resetUser } =
  userSlice.actions;

export default userSlice.reducer;
