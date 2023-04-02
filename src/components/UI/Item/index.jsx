import React from "react";
import { Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";

const Item = ({ title, Icon, selected, setSelected, to }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log(title);
  return (
    <>
      <Tooltip title={title}>
        <Link
          to={to}
          style={{
            color: colors.gray[100],
          }}
        >
          <MenuItem
            active={selected === title}
            onClick={(e) => setSelected(title)}
            icon={Icon}
          >
            <Typography
              sx={{
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              {title}
            </Typography>
          </MenuItem>
        </Link>
      </Tooltip>
    </>
  );
};

export default Item;
