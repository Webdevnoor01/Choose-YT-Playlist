import { useDispatch } from "react-redux";
import getPlaylists from "../api/getPlaylists";
import { setPlaylist } from "../store/playlistSlice";
import { useState } from "react";
import { useEffect } from "react";

const useUserInit = () => {
    const dispatch = useDispatch();
    const [isInit, setIsInit] = useState(false)
    console.log("inInit: ", isInit)

    function init() {
        setIsInit(!isInit)
        const token = localStorage.getItem("authToken");
        console.log("token: ", token)
        async function fetchPlaylistFromDB() {
            const playlistObj = await getPlaylists(token);
            dispatch(setPlaylist(playlistObj));
            console.log("playlistObj: ", playlistObj);
        }

        if (token) {
            fetchPlaylistFromDB();
        }
    }
    // useEffect(() => {
    //     const token = localStorage.getItem("authToken");
    //     console.log("token: ", token)
    //     async function fetchPlaylistFromDB() {
    //         const playlistObj = await getPlaylists(token);
    //         dispatch(setPlaylist(playlistObj));
    //         console.log("playlistObj: ", playlistObj);
    //     }

    //     if (token) {
    //         fetchPlaylistFromDB();
    //     }

    //     console.log("useUserInit rendered")
    // }, [isInit, dispatch]);

    return {
        init
    }
}

export default useUserInit