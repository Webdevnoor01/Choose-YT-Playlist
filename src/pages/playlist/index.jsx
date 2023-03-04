import React from "react";

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
  return (
    <Box
      sx={{
        // display: "flex",
        // flexWrap: "wrap",
        // justifyContent: "flex-start",
        // alignItems: "center",
        // gap: "1rem",
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit, minmax(255px, 1fr))",
        gap:".5rem"
      }}
    >
      <PlaylistCard
        title={playlist.title}
        thumbnail={playlist.thumbnail}
        channelName={playlist.channelName}
        videos={playlist.videos}
      />
      <PlaylistCard
        title={playlist.title}
        thumbnail={playlist.thumbnail}
        channelName={playlist.channelName}
        videos={playlist.videos}
      />
      <PlaylistCard
        title={playlist.title}
        thumbnail={playlist.thumbnail}
        channelName={playlist.channelName}
        videos={playlist.videos}
      />
      <PlaylistCard
        title={playlist.title}
        thumbnail={playlist.thumbnail}
        channelName={playlist.channelName}
        videos={playlist.videos}
      />
      <PlaylistCard
        title={playlist.title}
        thumbnail={playlist.thumbnail}
        channelName={playlist.channelName}
        videos={playlist.videos}
      />
      <PlaylistCard
        title={playlist.title}
        thumbnail={playlist.thumbnail}
        channelName={playlist.channelName}
        videos={playlist.videos}
      />
      <PlaylistCard
        title={playlist.title}
        thumbnail={playlist.thumbnail}
        channelName={playlist.channelName}
        videos={playlist.videos}
      />
    </Box>
  );
};

export default Playlist;
