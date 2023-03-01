import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

// MUI hooks
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

const VideoList = ({ videos, channelTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <>
      {videos.map((video) => (
        <Card
          key={Date.now() * Math.random()}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: ".5rem",
            cursor: "pointer",
            backgroundColor:colors.secondary[500],
            [theme.breakpoints.down("md")]: {
              minHeight: "5rem",
            },
          }}
        >
          <Box
            sx={{
              width: "41%",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              [theme.breakpoints.down("md")]: {
                width: "65%",
              },
            }}
          >
            <CardMedia
              component='img'
              sx={{ width: "100%" }}
              image={video.thumbnail}
              alt='Live from space album cover'
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              "& .css-pfmexh-MuiCardContent-root:last-child": {
                pb: "0",
              },
            }}
          >
            <CardContent sx={{ flex: "1 0 auto", p: "0 1rem" }}>
              <Typography
                variant='body2'
                fontSize='.8rem'
              >
                {video.title.substr(0, 50)}
              </Typography>
              <Typography
                variant='subtitle1'
                color='text.secondary'
                component='div'
              >
                {channelTitle}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default VideoList;
