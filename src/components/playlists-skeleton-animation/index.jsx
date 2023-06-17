import { Box } from "@mui/material";
import React from "react";
import shortid from "shortid";
import PlaylistSkeletonAnimation from "../playlist-skeleton-animation";
const PlaylistsSkeletonAnimation = () => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
        gap: ".5rem",
      }}
    >
      {items.map((item) => (
        <PlaylistSkeletonAnimation key={shortid.generate()} />
      ))}
    </Box>
  );
};

export default PlaylistsSkeletonAnimation;
