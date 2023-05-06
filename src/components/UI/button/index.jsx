import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

import { Link } from "react-router-dom";

const ButtonUI = ({ text, onClick, style, mdNone, to, type, disable }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Button
      onClick={onClick}
      LinkComponent={Link}
      type={type}
      to={to && to}
      disabled={disable}
      sx={{
        color: colors.light[100],
        borderRadius: ".3rem",
        p: ".3rem 1rem  ",
        cursor: "pointer",
        backgroundColor: colors.blueAccent[500],
        color: colors.light[500],
        "&:hover": {
          backgroundColor: colors.blueAccent[600],
        },
        [theme.breakpoints.down("md")]: {
          display: `${mdNone && "none"}`,
        },
        ...style,
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonUI;
