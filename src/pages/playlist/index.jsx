import React from "react";

// react, redux
import { useSelector, useDispatch } from "react-redux";

// MUI components
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Custom Components
import PlaylistCard from "../../components/playlist-card";
import EmptyMessage from "../../components/empty-message";
import { tokens } from "../../theme";

const playlist = {
  title: "একজন ডেভেলপার হিসেবে কিভাবে চাকরি পাবেন? How to get hired?",
  thumbnail:
    "https://i.ytimg.com/vi/j37Yp_aJCDc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATvQ12h3WTl_-EsvaHNBonY4JEog",
  channelName: "Procoder BD",
  videos: "50",
};

const Playlist = () => {
  const theme = useTheme()
  const colors= tokens(theme.palette.mode)
  const playlists = useSelector((state) => state.playlist);
  const playlistArr = Object.values(playlists.items);
  console.log(playlistArr);

  // The gridMinMaxObj is used to add grid size unit in grid minmax
  const gridMinMaxObj = {
    20: "px",
    1: "fr",
  };
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(255px, ${
          playlistArr.length < 4 && playlistArr.length !== 0 ? 20 : 1
        }${
          gridMinMaxObj[
            playlistArr.length < 4 && playlistArr.length !== 0 ? 20 : 1
          ]
        }))`,
        gap: ".5rem",
      }}
    >
      
      {playlistArr.length > 0&& playlistArr.map((playlist) => (
        <PlaylistCard
          title={playlist.playlistTitle}
          thumbnail={playlist.playlistThumbnail.url}
          channelName={playlist.channelTitle}
          videos={playlist.videos.length}
          playlistId={playlist.playlistId}
        />
      ))}
      {playlists.loading && <Box sx={{
        minHeight:"316.188px",
        maxWidth:"270.5px",
        backgroundColor: theme.palette.secondary.main,
        color:colors.gray[100],
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:".5rem"
      }} >
       <Typography variant="body1" >Loading...</Typography>  </Box>}
      {playlistArr.length === 0 && !playlists?.loading && <EmptyMessage />}
    </Box>
  );
};

export default Playlist;
