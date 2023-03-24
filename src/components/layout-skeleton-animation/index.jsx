import React from "react";
import { Box, colors } from "@mui/material";
import PlaylistSkeletonAnimation from "../playlist-skeleton-animation";
import shortid from "shortid";
const LayoutSkeletonAnimation = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridTemplateRows: "50px auto",
        gridTemplateAreas: `
        "h h h h h h h h h h h h "
        "s s m m m m m m m m m m "
    `,
        "@media (max-width:768px)": {
          gridTemplateAreas: `
            "h h h h h h h h h h h h "
            "m m m m m m m m m m m m "
            "s s s s s s s s s s s s "
        `,
          gridTemplateRows: "50px auto 50px",
        },
        gap: ".3rem",
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          gridArea: "h",
          backgroundColor: "gray",
          gridColumn: "1 / -1",
          p: "1rem",
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
          gridArea: "s",
          backgroundColor: "gray",
          opacity: ".8",
          animation: "skeleton-sidebar .8s linear infinite alternate",
          "@keyframes skeleton-sidebar": {
            "0%": {
              opacity: ".5",
            },
            "100%": {
              opacity: ".8",
            },
          },
          "@media (max-width:768px)": {
            position: "absolute",
            bottom: "0rem",
            width: "100vw",
            height: "50px",
          },
        }}
      >
        {items.map((item) => (
          <Box
            sx={{
              width: "100%",
              borderRadius: ".5rem",
              backgroundColor: "black",
              p: "1.5rem 2rem",
              m: ".5rem 0 ",
              animation: "skeleton-sidebar .8s linear infinite alternate",
              "@keyframes skeleton-sidebar": {
                "0%": {
                  opacity: ".5",
                },
                "100%": {
                  opacity: ".8",
                },
              },
            }}
          ></Box>
        ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          gridArea: "m",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))",
          gap: ".5rem",
        }}
      >
        {items.map((item) => (
          <PlaylistSkeletonAnimation key={shortid.generate()} />
        ))}
      </Box>
    </Box>
  );
};

export default LayoutSkeletonAnimation;
