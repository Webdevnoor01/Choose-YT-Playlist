import axios from "axios"

const userUrl =
    import.meta.env.VITE_USER_API

async function getPlaylists(token) {
    try {
        const playlist = await axios.get(`${userUrl}/playlists`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const playlistObj = playlist.data.data.reduce((acc, curr) => {

            acc[curr.attributes.playlistId] = {
                ...curr.attributes,
                channelTitle: "Stack Learner"
            }
            return acc
        }, {})

        return playlistObj
    } catch (e) {
        return {
            isError: true,
            message: `${e.message || e.response.error?.data.message}`
        }
    }
}

export default getPlaylists