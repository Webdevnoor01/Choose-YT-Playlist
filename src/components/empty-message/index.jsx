import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { tokens } from "../../theme";

const EmptyMessage = ({message}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p:"1rem",
        borderRadius:".5rem"
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundImage:"url(../images/animated_empty.gif)",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center center",
          borderRadius:".5rem"
        }}
      >
        <Typography variant="h3" sx={{
          color:colors.dark[500],
          fontSize:"1.5rem",
          textAlign:"center"
        }} >{message}</Typography>
      </Box>
    </Box>
  );
};

export default EmptyMessage;
