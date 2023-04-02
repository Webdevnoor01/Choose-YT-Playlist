import { Box } from "@mui/material";
import React from "react";

const VideoPlayerSkeletonAnimation = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColro: "gray",
        animation: "skeleton-header .8s linear infinite alternate",
        "& .MuiTypography-root": {
          animation: "skeleton-header .8s linear infinite alternate",
        },
        "@keyframes skeleton-header": {
          "0%": {
            opacity: ".3",
          },
          "100%": {
            opacity: ".8",
          },
        },
      }}
    >
      <Box
        sx={{
          minHeight: "60vh",
          width: "100%",
          backgroundColor: "gray",
          borderRadius: ".5rem",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            minHeight: "5rem",
            width: "100%",
            backgroundColro: "gray",
            borderRadius: ".5rem",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              width: "95%",
              m: ".5rem auto",
              p: "1.5rem 0",
              backgroundColor: "whitesmoke",
            }}
          ></Box>

          <Box
            sx={{
              width: "95%",
              m: ".5rem auto",
              p: "1.5rem 0",
              backgroundColor: "whitesmoke",
              borderRadius: ".5rem",
            }}
          ></Box>

          <Box
            sx={{
              width: "95%",
              m: ".5rem auto",
              p: "1.5rem 0",
              backgroundColor: "whitesmoke",
              borderRadius: ".5rem",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            minHeight: "5rem",
            width: "100%",
            borderRadius: ".5rem",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              width: "95%",
              m: ".5rem auto",
              p: "1.5rem 0",
              backgroundColor: "whitesmoke",
              borderRadius: ".5rem",
            }}
          ></Box>

          <Box
            sx={{
              width: "95%",
              m: ".5rem auto",
              p: "1.5rem 0",
              backgroundColor: "whitesmoke",
              borderRadius: ".5rem",
            }}
          ></Box>

          <Box
            sx={{
              width: "95%",
              m: ".5rem auto",
              p: "1.5rem 0",
              backgroundColor: "whitesmoke",
              borderRadius: ".5rem",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlayerSkeletonAnimation;
