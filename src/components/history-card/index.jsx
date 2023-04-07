// react-redux
import { useDispatch } from "react-redux";

// actions
import { deleteHistory } from "../../store/historySlice";
// react-router-dom
import { createSearchParams, useNavigate } from "react-router-dom";

// MUI component
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

// MUI hooks
import { useTheme } from "@mui/material/styles";

// MUI icons
import { DeleteOutlineOutlined } from "@mui/icons-material";

// Theme settings
import { tokens } from "../../theme";

const HistoryCard = ({
  thumbnail,
  title,
  channelName,
  playlistId,
  videoId,
  videoIndex,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);

  const navigateToWatch = () => {
    navigate({
      pathname: "/watch",
      search: `?${createSearchParams({
        v: videoId,
        list: playlistId,
        index: videoIndex,
      })}`,
    });
  };

  const handleDeleteHistory = (videoId) => {
    dispatch(deleteHistory(videoId));
  };
  return (
    <Card
      sx={{
        [theme.breakpoints.up("md")]: {
          display: "flex",
        },
        justifyContent: "space-between",
        alignItems: "center",
        maxHeight: "200px",
        backgroundColor: colors.secondary[500],
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
          maxHeight: "400px",
        },
        "&:hover": {
          "& .MuiCardActions-root": {
            visibility: "visible",
          },
        },
      }}
    >
      <CardContent
        sx={{
          padding: "0",
          [theme.breakpoints.up("md")]: {
            height: "100%",
            minWidth: "45%",
          },
        }}
        onClick={navigateToWatch}
      >
        <CardMedia
          component='img'
          src={thumbnail}
          sx={{
            height: "100%",
          }}
          onClick={navigateToWatch}
        />
      </CardContent>

      <CardContent>
        <Typography
          variant='subtitle1'
          onClick={navigateToWatch}
        >
          {title}
        </Typography>
        <Typography variant='subtitle2'> {channelName} </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          visibility: "hidden",
        }}
      >
        <IconButton onClick={() => handleDeleteHistory({ videoId })}>
          <DeleteOutlineOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default HistoryCard;
