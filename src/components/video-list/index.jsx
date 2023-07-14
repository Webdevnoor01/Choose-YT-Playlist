import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ToolTip from "@mui/material/Tooltip";

// MUI hooks
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

const VideoList = ({
  videos,
  channelTitle,
  onVideoClick,
  currentVideoIndex,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      {videos &&
        videos.map((video, index) => (
          <Card
            key={Date.now() * Math.random()}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              marginBottom: ".5rem",
              cursor: "pointer",
              backgroundColor: `${
                currentVideoIndex === index+1
                  ? "#163a5f"
                  : colors.secondary[500]
              }`,
              [theme.breakpoints.down("md")]: {
                minHeight: "5rem",
              },
            }}
            onClick={() =>
              onVideoClick(video.videoContentDetails.videoId, video.index)
            }
          >
            <Box
              sx={{
                width: "41%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                [theme.breakpoints.down("md")]: {
                  minWidth: "45%",
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "100%" }}
                image={video.videoThumbnail?.url}
                alt="Live from space album cover"
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pt:".5rem",
                "& .css-pfmexh-MuiCardContent-root:last-child": {
                  pb: "0",
                },
              }}
            >
              <CardContent sx={{ flex: "1 0 auto", p: "0 1rem" }}>
                <ToolTip title={video.videoTitle} > 
                  <Typography variant="body2" fontSize=".8rem">
                    {video.videoTitle?.slice(0, 50)}...
                  </Typography>
                </ToolTip>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
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
