import axios from "axios";

const userUrl =
    import.meta.env.VITE_USER_API
async function updatePlaylistItems(userId, payload, token) {
    try {
        const response = await axios.put(`${userUrl}/users/${userId}`, payload, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        if (!response.data.error) {
            return {
                playlistItems: response.data.playlist.items
            }
        }
    } catch (e) {
        return {
            isError: true,
            message: e
        }
    }
}

export default updatePlaylistItems