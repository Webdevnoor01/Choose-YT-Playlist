import { useParams, useSearchParams, createSearchParams } from "react-router-dom";
import * as qs from "query-string"
import {useDispatch, useSelector } from "react-redux"
import { useStoreActions, useStoreState } from "easy-peasy"
import ReactPlayer from "react-player/youtube";
import VideoList from "../../components/video-list";
import { useState, useEffect } from "react";
import { setplaylist } from "../../store/playlistSlice";
import storage from "../../utils/Storage";
const STORAGE_KEY = "C-YT-PLAYLIST";

const Player = () => {
  // const state = useSelector(state => state.playlist)
  // const dispatch = useDispatch()
  const [currVideoId, setCurrVideoId] = useState(null)
  const { playlistId } = useParams();
  const [searchParams , setSearchParams ] = useSearchParams()
  
  const state = useStoreState((state) => state.playlist)
  const setPlaylist = useStoreActions((action) =>action.setPlaylist)
  useEffect(() => {
    const data = storage.get(STORAGE_KEY);
    const query = qs.default.parse(location.search)
    if (data) {
      // dispatch(setplaylist(data))
      setPlaylist(data)
      setCurrVideoId(query.v)
    }
    
  },[]);

  if(!state.playlists[playlistId] || !currVideoId ) return (<h2>Loading...</h2>) ;
  const currentPlaylist = state.playlists[playlistId];
  const { channelTitle, videos } = currentPlaylist;
  const { videoId } = currentPlaylist.videos[0].videoContentDetails;

  const updateVideoId = (videoId) =>{
    setCurrVideoId(videoId)
    setSearchParams(createSearchParams({v:videoId}))
  }
  
  const url = `www.youtube.com/watch?v=${currVideoId ? currVideoId:videoId}`;
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
