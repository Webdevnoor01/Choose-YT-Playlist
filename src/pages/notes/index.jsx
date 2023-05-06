import React from "react";

// react-redux
import { useSelector } from "react-redux";
// MUI Components
import { Box } from "@mui/material";

// Custome components
import NoteCard from "../../components/note-card";
import EmptyMessage from "../../components/empty-message";
import useCheckAuth from "../../hooks/useCheckAuth";

const Notes = () => {
  const { isAuth } = useCheckAuth();
  const notes = useSelector((state) => state.notes);
  const noteArr = Object.values(notes);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: `${noteArr.length === 0 ? "center" : "flex-start"}`,
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {noteArr.length === 0 && (
        <EmptyMessage
          message='No notes available'
          btnTxt='Go to playlist'
          to='/'
        />
      )}
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
