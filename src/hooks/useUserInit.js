import { useDispatch } from "react-redux";
import getPlaylists from "../api/getPlaylists";
import { setPlaylist } from "../store/playlistSlice";
import { useState } from "react";
import { useEffect } from "react";

const useUserInit = () => {
    const dispatch = useDispatch();
    const [isInit, setIsInit] = useState(false)

    function init() {
        setIsInit(!isInit)
        const token = localStorage.getItem("authToken");
        async function fetchPlaylistFromDB() {
            const playlistObj = await getPlaylists(token);
            dispatch(setPlaylist(playlistObj));
        }

        if (token) {
            fetchPlaylistFromDB();
        }
    }

    return {
        init
    }
}

export default useUserInit