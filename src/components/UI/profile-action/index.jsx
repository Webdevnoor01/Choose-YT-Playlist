import React from "react";
import { Link } from "react-router-dom";

// MUI Components
import { Button, Typography } from "@mui/material";

// MUI Hooks
import { useTheme } from "@mui/material/styles";

// From theme settings
import { tokens } from "../../../theme";


const ProfileAction = ({ onClick, Icon, text, style={}, to }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <>
      <Button 
        onClick={onClick}
        LinkComponent={Link}
        to={to}
        sx={{
          color: colors.gray[100],
          backgroundColor: colors.blueAccent[500],
          width: "100%",
          diaplay: "flex",
          justifyContent: "flex-start",
          gap: "2rem",
          color:colors.light[500],
          "&:hover": {
            backgroundColor: colors.blueAccent[600],
          },
          ...style
        }}
      >
        <Icon />

        <Typography variant='body1'>{text}</Typography>
      </Button>
    </>
  );
};

export default ProfileAction;
