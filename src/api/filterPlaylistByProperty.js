import axios from "axios";

const userUrl =
    import.meta.env.VITE_USER_API
async function filterPlaylistByProperty(property) {
    try {
        const token = localStorage.getItem("authToken")
        if(token){
            let playlist = await axios.get(`${userUrl}/playlists?filters[${property.key}][$eq]=${property.value}&fields[0]=playlistId`, {
                headers:{
                    "Authorization" : `Bearer ${token}`
                }
            })
    
            if (!playlist.data.error) {
                return playlist.data.data[0]
                
            }
        }

       
    } catch (e) {
        return {
            isError: true,
            message: e
        }
    }
}

export default filterPlaylistByProperty