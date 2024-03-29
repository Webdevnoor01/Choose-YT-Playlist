import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { tokens } from "../../theme";

const SearchCard = ({ title, channelName, thumbnail, onClick, index }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Card
      className="childDiv"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: ".5rem",
        m: "1rem auto",
        borderRadius: ".5rem",
        backgroundColor: colors.secondary[500],
        transition: "all .2s linear",
        "&:hover": {
          backgroundColor: colors.secondary[600],
        },
        minWidth: "90%",
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
          minWidth: "100%",
        },
      }}
    >
      <CardContent
        className="childDiv"
        sx={{
          minWidth: "45%",
          p: "0",
          [theme.breakpoints.down("sm")]: {
            minWidth: "55%",
          },
        }}
        onClick={onClick}
      >
        <CardMedia
          className="childDiv"
          component={"img"}
          alt="Video thumbnail"
          src={thumbnail}
          sx={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </CardContent>

      <CardContent
        className="childDiv"
        sx={{
          p: "0 .4rem",
          minWidth: "50%",
          [theme.breakpoints.down("sm")]: {
            minWidth: "45",
          },
        }}
        onClick={onClick}
      >
        <Tooltip title={title}>
          <Typography
            className="childDiv"
            onClick={onClick}
            sx={{
              p: ".5rem",
              [theme.breakpoints.down("sm")]: {
                fontSize: ".8rem",
              },
            }}
          >
            {title.slice(0, 40)}...
          </Typography>
        </Tooltip>
        <Typography
          className="childDiv"
          sx={{
            p: ".5rem",
            [theme.breakpoints.down("sm")]: {
              fontSize: ".8rem",
            },
          }}
        >
          {channelName}
        </Typography>
        <Typography
          sx={{
            p: ".5rem",
            [theme.breakpoints.down("sm")]: {
              fontSize: ".8rem",
            },
          }}
        >
          index: {index}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
