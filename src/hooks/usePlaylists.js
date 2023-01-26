import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from "../store/playlistSlice";
import storage from "../utils/Storage";
import { setplaylist } from "../store/playlistSlice";
import { INIT_STATE } from "../store/playlistSlice";
const STORAGE_KEY = "C-YT-PLAYLIST";

const usePlaylists = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { playlists, error, loading } =state.playlist

  useEffect(() => {
    const data = storage.get(STORAGE_KEY);
    if (data) {
      dispatch(setplaylist(data))
    }
    
  }, []);

  useEffect(() => {
    if (state.playlist !== INIT_STATE) {
      storage.save(STORAGE_KEY, state.playlist);
      console.log("save state to storage", state.playlist)
    }
  }, [state]);

  const getPlaylistsById = async (playlistId) => {
    dispatch(fetchPlaylist(playlistId));
  };

  // const addToFavorite = (playListId) => {
  //   setState((prev) => ({
  //     favoritesPlaylists: [...prev.favoritesPlaylists, playListId],
  //   }));
  // };

  // const addToRecent = (playListId) => {
  //   setState((prev) => ({
  //     recentPlaylists: [...prev.recentPlaylists, playListId],
  //   }));
  // };

  return {
    playlists,
    getPlaylistsById,
    error,
    loading,
  };
};

export default usePlaylists;
