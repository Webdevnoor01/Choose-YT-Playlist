import React from "react";

// react, redux
import { useSelector, useDispatch } from "react-redux";

// MUI components
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Custom Components
import PlaylistCard from "../../components/playlist-card";

const playlist = {
  title: "একজন ডেভেলপার হিসেবে কিভাবে চাকরি পাবেন? How to get hired?",
  thumbnail:
    "https://i.ytimg.com/vi/j37Yp_aJCDc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATvQ12h3WTl_-EsvaHNBonY4JEog",
  channelName: "Procoder BD",
  videos: "50",
};

const Playlist = () => {
  const playlists = useSelector((state) => state.playlist);
  const playlistArr = Object.values(playlists.items);
  console.log(playlistArr);


  // The gridMinMaxObj is used to add grid size unit in grid minmax
  const gridMinMaxObj = {
    290: "px",
    1: "fr",
  };
  {
    playlist.loading && <h2>Loading...</h2>;
  }
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(255px, ${
          playlistArr.length < 4 ? 290 : 1
        }${gridMinMaxObj[playlistArr.length < 4 ? 290 : 1]}))`,
        gap: ".5rem",
      }}
    >
      {playlistArr.map((playlist) => (
        <PlaylistCard
          title={playlist.playlistTitle}
          thumbnail={playlist.playlistThumbnail.url}
          channelName={playlist.channelTitle}
          videos={playlist.videos.length}
        />
      ))}
      {playlistArr.length === 0 && <h2>Empty playlist</h2>}
    </Box>
  );
};

export default Playlist;
