import { Box, CardMedia, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { tokens } from "../../theme";

const Note = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(new Date(Date.now()))
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
          height:"25rem",
          [theme.breakpoints.down("md")]: {
            height: "10rem",
          },
        }}
      >
        <CardMedia
          component='img'
          src='https://i.ytimg.com/vi/j37Yp_aJCDc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATvQ12h3WTl_-EsvaHNBonY4JEog'
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
          display:"flex",
          justifyContent:"space-between"
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi
          enim vel quo ex, quae aspernatur dolor tempora vitae. Quaerat ab quod
          veniam commodi esse sapiente at minus, sequi velit accusamus! Qui ea,
          ratione dignissimos at pariatur iste quas? Enim illo fuga natus eaque
          quaerat ab aspernatur deserunt dolore amet, officia consequatur
          cupiditate et ratione eos magni repellat earum dignissimos iusto,
          labore cum! A amet cumque illo natus ullam aspernatur veniam dolorum
          praesentium. Minima perspiciatis id sint commodi optio cum quos,
          aspernatur nobis repudiandae quis enim animi reiciendis officia quia
          placeat accusamus alias provident voluptas soluta! Aperiam optio
          labore voluptatibus.
        </Typography>
      </Box>
    </Box>
  );
};

export default Note;
