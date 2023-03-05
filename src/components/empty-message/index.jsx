import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

const EmptyMessage = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p:"1rem"
      }}
    >
      <Box
        sx={{
        //   height: "50%",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component='img'
          src='../images/empty_dark.jpg'
          alt="Empty playlist"
          sx={{
            width:"100%",
            borderRadius:".5rem"
          }}
        />
      </Box>
    </Box>
  );
};

export default EmptyMessage;
