import axios from "axios";

const userUrl =
    import.meta.env.VITE_USER_API
async function createPlaylist(payload, token) {
    console.log("playlistPayload: ", payload)
    try {
        const response = await axios.post(`${userUrl}/playlists`, payload, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        if (!response.data.error) {
            return {
                playlist: response.data
            }
        }
    } catch (e) {
        return {
            isError: true,
            message: e
        }
    }
}

export default createPlaylist