import axios from "axios";


const apiKey = import.meta.env.VITE_YOUTUBE_API_KAY
const getPlaylistItems =  async (playListId, pageToken, result=[]) => {
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=id,contentDetails,snippet&playlistId=${playListId}&maxResults=50&key=${apiKey}&${pageToken&&`pageToken=${pageToken}`}`


    const {data} = await axios.get(url)
    result = [...result,...data.items]
    if(data.nextPageToken) {
        result = await getPlaylistItems (playListId, data.nextPageToken, result)
    }

    return result
}

const getPlaylist = async (playlistId) =>{
    console.log("api called")
    const url = `https://www.googleapis.com/youtube/v3/playlists?part=id,contentDetails,snippet&id=${playlistId}&key=${apiKey}`


    const { data } = await axios.get(url)
    const {title:playlistTitle, description:playlistDescription, thumbnails, channelTitle} = data.items[0].snippet

    let cid, ct;
    let  result = await getPlaylistItems(playlistId)
    result = result.map((item) => {
        const {
          channelId,
          channelTitle,
          title,
          description,
          thumbnails: { medium },
        } = item.snippet;
  
        if (!cid) {
          cid = channelId;
        }
  
        if (!ct) {
          ct = channelTitle;
        }
  
        return {
          videoTitle:title,
          videoDescription:description,
          videoThumbnail: medium,
          videoContentDetails: item.contentDetails,
        };
      });

      return {
        playlistId,
        playlistDescription,
        playlistTitle,
        playlistThumbnail:thumbnails.medium,
        videos:result,
        channelTitle:ct,
        channelId:cid,
        channelTitle

      }

}

export default getPlaylist