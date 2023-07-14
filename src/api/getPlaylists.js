import axios from "axios";

const userUrl = import.meta.env.VITE_USER_API;

async function getPlaylists(token, playlistIds) {
  console.log("get playlists called")
  try {
    if (playlistIds) {
      const playlist = await axios.get(`${userUrl}/playlists`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const finalPlaylist = playlist.data.data.reduce((acc, curr) => {
        if (playlistIds.includes(curr.attributes.playlistId)) {
          acc[curr.attributes.playlistId] = curr.attributes;
        }
        return acc;
      }, {});

      return finalPlaylist;
    }
  } catch (e) {
    return {
      isError: true,
      message: `${e.message || e.response.error?.data?.message}`,
    };
  }
}

export default getPlaylists;
