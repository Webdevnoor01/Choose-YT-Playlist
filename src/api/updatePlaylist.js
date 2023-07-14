import axios from "axios";

const userUrl =
    import.meta.env.VITE_USER_API
async function updatePlaylist(id, payload ) {
    console.log("Update playlist called")
    try {
        let token = localStorage.getItem("authToken")
        const response = await axios.put(`${userUrl}/playlists/${id}`,payload, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        console.log("updatePlaylistDB-api", response)

        
            return  response
            
    } catch (e) {
        console.log("updatePlaylistDB-api", e)
        return {
            isError: true,
            message: e
        }
    }
}

export default updatePlaylist