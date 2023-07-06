import { useDispatch, useSelector } from "react-redux";
import getPlaylists from "../api/getPlaylists";
import { setPlaylist, setPlsylitLoading } from "../store/playlistSlice";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getUser from "../api/getUser";
import { setUserProfile } from "../store/userSlice";

const useUserInit = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const [isInit, setIsInit] = useState(false);

  async function initUser(){
    const token = localStorage.getItem("authToken")
    try {
      const data = await getUser(token)
      dispatch(setUserProfile(data.user))
      return data.user
    } catch (error) {
      console.log('initUser:Error->', error)
    }
  }
  function init(userPlaylistItems) {
    try {
      dispatch(setPlsylitLoading(true));
      console.log("init called ", userPlaylistItems);
      setIsInit(!isInit);
      const token = localStorage.getItem("authToken");
      async function fetchPlaylistFromDB() {
        if (userPlaylistItems) {
          const obj = await getPlaylists(token, userPlaylistItems);

          dispatch(setPlaylist(obj));
          dispatch(setPlsylitLoading(false));
        }
      }
      dispatch(setPlsylitLoading(false));

      if (token) {
        fetchPlaylistFromDB();
      }
    } catch (error) {
      dispatch(setPlsylitLoading(false));
      console.log("userInit:Error-> ", error);
    }
  }

  return {
    init,
    initUser
  };
};

export default useUserInit;
