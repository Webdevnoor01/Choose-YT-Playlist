import React from "react";

// MUI Components
import { Box } from "@mui/material";
import NoteCard from "../../components/note-card";
import { useSelector } from "react-redux";
const playlist = {
  title: "একজন ডেভেলপার হিসেবে কিভাবে চাকরি পাবেন? How to get hired?",
  thumbnail:
    "https://i.ytimg.com/vi/j37Yp_aJCDc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATvQ12h3WTl_-EsvaHNBonY4JEog",
  channelName: "Procoder BD",
  videos: "50",
};
const Notes = () => {
  const notes = useSelector((state) => state.notes);
  console.log(notes)
  const noteArr = Object.values(notes);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: `${noteArr.length===0?"center":"flex-start"}` ,
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {
        noteArr.length === 0 && <h2>There is no available note</h2>
      }
      {noteArr.map((note) => (
        <NoteCard
          thumbnail={note.videoThumbnail}
          note={note.noteData}
          channelName={note.channelTitle}
          videoId={note.videoId}
          playlistId={note.playlistId}
          noteId={note.noteId}
        />
      ))}
    </Box>
  );
};

export default Notes;
