// react
import React from "react";

// react-redux
import { useSelector } from "react-redux";

// react-router-dom

// third-party libraries
import * as qs from "query-string";

// MUI hooks
import { useTheme } from "@mui/material/styles";

// MUI ocmponents
import { Box, CardMedia, Typography } from "@mui/material";

// Theme settings
import { tokens } from "../../theme";

// Custome Hooks
import useCheckAuth from "../../hooks/useCheckAuth";

const Note = () => {
  const {} = useCheckAuth();
  const theme = useTheme();
  const { noteId } = qs.default.parse(location.search);
  const currentNote = useSelector((state) => state.notes[noteId]);

  const colors = tokens(theme.palette.mode);

  // return <h2>Loading</h2>
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "25rem",
          [theme.breakpoints.down("md")]: {
            height: "10rem",
          },
        }}
      >
        <CardMedia
          component='img'
          src={currentNote.videoThumbnail}
          alt='note-image'
          sx={{
            height: "100%",
            width: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: colors.pinkAccent[500],
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant='body2'
          sx={{
            textAlign: "right",
            p: ".5rem .8rem",
          }}
        >
          {" "}
          {new Date(Date.now()).toLocaleDateString()}{" "}
        </Typography>{" "}
        <Typography
          variant='body2'
          sx={{
            textAlign: "right",
            p: ".5rem .8rem",
          }}
        >
          {" "}
          {new Date(Date.now()).toLocaleTimeString()}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "80%",
          m: "0 auto",
        }}
      >
        <Typography
          variant='body1'
          sx={{
            textAlign: "left",
          }}
        >
          {currentNote.noteData}
        </Typography>
      </Box>
    </Box>
  );
};

export default Note;
