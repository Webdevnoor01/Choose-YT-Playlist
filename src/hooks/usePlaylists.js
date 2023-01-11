import { useEffect } from "react";
import { useState } from "react";
import getPlaylist from "../api";
import storage from "../utils/Storage";

const STORAGE_KEY = "C-YT-PLAYLIST"
const INIT_STATE = {
  playlists: {},
  favoritesPlaylists: [],
  recentPlaylists: [],
}
const usePlaylists = () => {
  const [state, setState] = useState(INIT_STATE);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    const data = storage.get(STORAGE_KEY)
    if(data) {
      setState({...data})
    }
  },[])

  useEffect(()=>{
    if(state !== INIT_STATE){
      storage.save(STORAGE_KEY, state)
    }
  },[state])

  const getPlaylistsById = async (playlistId) => {
    if (state.playlists[playlistId]) {
      // return state.playlists;
      const videosLen = state.playlists[playlistId].videos.length
      console.log(videosLen)
      setLoading(true)
      try{
       const result = await getPlaylist(playlistId);
       console.log(result)
        setError('')
        if(videosLen === result.videos.length) return state.playlists
        setState(prev =>({
          ...prev,
          playlists:{
            ...prev.playlists,
            [playlistId]:result
          }
        }))
      }catch (e) {
        console.log(e)
        setError(e?.response?.data?.error?.message || "Something went wrong")
      }finally{
        setLoading(false)
      }
    }

  
  };

  const addToFavorite = (playListId) => {
    setState((prev) => ({
      favoritesPlaylists: [...prev.favoritesPlaylists, playListId],
    }));
  };

  const addToRecent = (playListId) => {
    setState((prev) => ({
      recentPlaylists: [...prev.recentPlaylists, playListId],
    }));
  };


  return {
    playlists: state.playlists,
    getPlaylistsById,
    addToFavorite,
    addToRecent,
    error,
    loading
  };
};

export default usePlaylists;
