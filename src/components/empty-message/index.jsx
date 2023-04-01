import { Box, CardMedia, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAddPlaylistToggle } from "../../store/toogleSlice";
import { tokens } from "../../theme";
import ButtonUI from "../UI/button";

const EmptyMessage = ({ message, btnTxt, to, styles }) => {
  const states = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleTogglePlaylist = () => {
    if (to) return navigate(to);
    dispatch(setAddPlaylistToggle(!states.toggle.addPlaylistToggle));
  };
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "1rem",
        borderRadius: ".5rem",
        ...styles,
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "20rem",
            m: "0 auto",
            borderRadius: "100%",
          }}
        >
          <CardMedia
            component='img'
            src='../../images/empty_image.png'
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Typography
          sx={{
            color: colors.gray[100],
            textAlign: "center",
            fontSize: "1.1rem",
            fontWeight: "400",
            m: ".5rem 0",
          }}
        >
          {message}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <ButtonUI
            text={btnTxt}
            onClick={handleTogglePlaylist}
            mdNone={false}
            style={{
              m: "0 auto",
              backgroundColor: colors.pinkAccent[500],
              "&:hover": {
                backgroundColor: colors.pinkAccent[600],
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyMessage;
