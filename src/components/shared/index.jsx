import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { tokens } from "../../theme";

const NoteItem = ({index,title}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return  <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    p: "1rem .5rem",
    mb:".5rem",
    gap: "1rem",
    backgroundColor: colors.secondary[500],
    borderRadius: ".5rem",
  }}
>
  <Typography variant='body1'>{index}</Typography>
  <Typography variant='body1'>
    {title}
  </Typography>
  <Typography>{new Date().toLocaleTimeString()}</Typography>
</Box>;
};

export default NoteItem;
