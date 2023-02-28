import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const VideoList = ({ videos, channelTitle, updateVideoId }) => {
  return (
    <div className="playlsit_video_list">
      {videos.map((video) => (
        <Card
          onClick={() => updateVideoId(video.videoContentDetails.videoId)}
          key={video.videoContentDetails.videoId}
          sx={{ display: "flex", marginBottom: "1rem", cursor: "pointer" }}
        >
          <CardMedia
            component="img"
            sx={{ width: video.videoThumbnail.width - 100, height: "100%" }}
            image={video.videoThumbnail.url}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="body2" fontSize=".8rem">
                {video.videoTitle.substr(0, 50)}
              </Typography>
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
    </div>
  );
};

export default VideoList;
