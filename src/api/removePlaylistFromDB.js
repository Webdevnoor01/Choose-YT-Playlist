import axios from "axios";
import filterPlaylistByProperty from "./filterPlaylistByProperty";

const userUrl = import.meta.env.VITE_USER_API;
async function removePlaylistFromDB(playlistId) {
  console.log("filter playlist called");
  try {
    const playlist = await filterPlaylistByProperty({
      key: "playlistId",
      value: playlistId,
    });
    const token = localStorage.getItem("authToken");
    if (playlist.id) {
      const removePlaylist = await axios.delete(
        `${userUrl}/playlists/${playlist.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return {
        status:removePlaylist.status,
        playlistId: removePlaylist.data.data.attributes.playlistId
      }
    }else{
        return {
            isError:true,
            message:"invalid playlist Id"
        }
    }

  } catch (e) {
    return {
      isError: true,
      message: e,
    };
  }
}

export default removePlaylistFromDB;
