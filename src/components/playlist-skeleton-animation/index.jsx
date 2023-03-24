import { Box } from "@mui/material";
import React from "react";

const PlaylistSkeletonAnimation = () => {
  return (
    <Box
      sx={{
        borderRadius:".5rem",
        p:".4rem"
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "155px",
          backgroundColor: "gray",
          opacity: ".5",
          mb:".5rem",
          zIndex:"2",
          borderRadius:".5rem",
          animation: "skeleton-header .8s linear infinite alternate",
          "@keyframes skeleton-header": {
            "0%": {
              opacity: ".3",
            },
            "100%": {
              opacity: ".8",
            },
          },
        }}
      ></Box>

      <Box
        sx={{
          height: "20px",
          width:"100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb:".5rem",
          zIndex:"2",
          animation: "skeleton-header .8s linear infinite alternate",
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
            height: "100%",
            width: "80%",

            backgroundColor: "gray",
            opacity: ".5",
            zIndex:"2",
            animation: "skeleton-header .8s linear infinite alternate",
          "@keyframes skeleton-header": {
            "0%": {
              opacity: ".3",
            },
            "100%": {
              opacity: ".8",
            },
          },
          }}
        ></Box>
        <Box
          sx={{
            height: "100%",
            width: "18%",

            backgroundColor: "gray",
            opacity: ".5",
            zIndex:"2",
            animation: "skeleton-header .8s linear infinite alternate",
          "@keyframes skeleton-header": {
            "0%": {
              opacity: ".3",
            },
            "100%": {
              opacity: ".8",
            },
          },
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          height: "20px",
          width:"100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb:".5rem",
          zIndex:"2",
          animation: "skeleton-header .8s linear infinite alternate",
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
            height: "100%",
            width: "49%",

            backgroundColor: "gray",
            opacity: ".5",
            zIndex:"2",
            animation: "skeleton-header .8s linear infinite alternate",
          "@keyframes skeleton-header": {
            "0%": {
              opacity: ".3",
            },
            "100%": {
              opacity: ".8",
            },
          },
          }}
        ></Box>
        <Box
          sx={{
            height: "100%",
            width: "49%",

            backgroundColor: "gray",
            opacity: ".5",
            zIndex:"2",
            animation: "skeleton-header .8s linear infinite alternate",
          "@keyframes skeleton-header": {
            "0%": {
              opacity: ".3",
            },
            "100%": {
              opacity: ".8",
            },
          },
          }}
        ></Box>
      </Box>
      

      <Box
        sx={{
          height: "20px",
          width: "100%",
          backgroundColor: "gray",
          opacity: ".5",
          zIndex:"2",
          animation: "skeleton-header .8s linear infinite alternate",
          "@keyframes skeleton-header": {
            "0%": {
              opacity: ".3",
            },
            "100%": {
              opacity: ".8",
            },
          },
        }}
      ></Box>
    </Box>
  );
};

export default PlaylistSkeletonAnimation;
