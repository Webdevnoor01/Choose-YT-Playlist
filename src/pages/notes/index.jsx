import React from "react";

// MUI Components
import { Box } from "@mui/material";
import NoteCard from "../../components/note-card";
const playlist = {
  title: "একজন ডেভেলপার হিসেবে কিভাবে চাকরি পাবেন? How to get hired?",
  thumbnail:
    "https://i.ytimg.com/vi/j37Yp_aJCDc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATvQ12h3WTl_-EsvaHNBonY4JEog",
  channelName: "Procoder BD",
  videos: "50",
};
const Notes = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <NoteCard
        thumbnail={playlist.thumbnail}
        note='This is the first note, click the read more button and read the note'
        channelName={playlist.channelName}
      />
    </Box>
  );
};

export default Notes;
