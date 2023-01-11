import React from "react";
import PlaylistCard from "../playlist-card";
import Grid from "@mui/material/Grid";

const Playlists = ({ playlists }) => {
  const playlistArr = Object.values(playlists);
  return (
    <>
      <Grid container alignItems={"stretch"}  sx={{maxWidth:"80%", margin:"0 auto"}} >
        {playlistArr.length > 0 &&
          playlistArr.map((playlist) => (
            <Grid item alignItems={"stretch"}  sx={4} >
              <PlaylistCard
                ChannelTitle={playlist.channelTitle}
                playlistTitle={playlist.playlistTitle}
                thumbnail={playlist.playlistThumbnail}
                playlistId={playlist.playlistId}
                key={playlist.playlistId}
              />
            </Grid>
          ))}
        {playlistArr.length <= 0 && <h2>You don't have any playlist</h2>}
      </Grid>
    </>
  );
};

export default Playlists;
