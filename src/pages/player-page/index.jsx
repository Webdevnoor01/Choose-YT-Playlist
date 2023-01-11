import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import VideoList from "../../components/video-list";
import { useState } from "react";
const Player = ({ playlists }) => {
  const [currVideoId, setVideoId] = useState(null)

  const updateVideoId = (videoId) =>{
    console.log("current video id: ", videoId)
    setVideoId(videoId)
  }
  const { playlistId } = useParams();
  const currentPlaylist = playlists[playlistId];
  const { channelTitle, videos } = currentPlaylist;
  const { videoId } = currentPlaylist.videos[0].videoContentDetails;
  const url = `www.youtube.com/watch?v=${currVideoId ? currVideoId:videoId}`;
  console.log(url)
  return (
    <>
      <h2> {currentPlaylist.playlistTitle} </h2>
      <h3>This is the first video of this playlist</h3>
      <div className="player_containe">
        <div className="video__container">

        <ReactPlayer  url={url} height={480} width={"100%"} playing={true} controls={true} />
        </div>
       <VideoList videos={videos} channelTitle={channelTitle} updateVideoId={updateVideoId} />
      </div>
    </>
  );
};

export default Player;
