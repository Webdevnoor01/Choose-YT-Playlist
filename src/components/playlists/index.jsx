import React from "react";
import { useSelector } from "react-redux"
import PlaylistCard from "../playlist-card";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";


const Playlists = () => {
  const state = useSelector(state => state.playlist)
  const playlistArr =  Object.values(state.playlists);

  return (
    <>
      <Grid container alignItems={"stretch"}  sx={{maxWidth:"80%", margin:"0 auto"}} >
        {playlistArr.length > 0 &&
          playlistArr.map((playlist) => (
            <Grid key={playlist.playlistId} item alignItems={"stretch"}  sx={4} >
              <PlaylistCard
                ChannelTitle={playlist.channelTitle}
                playlistTitle={playlist.playlistTitle}
                thumbnail={playlist.playlistThumbnail}
                playlistId={playlist.playlistId}
                key={playlist.playlistId}
                videoId={playlist.videos[0].videoContentDetails.videoId}
              />
            </Grid>
          ))}
        {playlistArr.length <= 0 && <h2>You don't have any playlist</h2>}
      </Grid>
    </>
  );
};

export default Playlists;
