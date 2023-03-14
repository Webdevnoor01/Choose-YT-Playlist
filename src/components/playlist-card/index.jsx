// React

// react-redux
import { useSelector, useDispatch } from "react-redux";

// react-router-dom
import { Link, useNavigate, createSearchParams } from "react-router-dom";

// actions
import { setRecentPlaylist } from "../../store/recentPlaylistSlice";

// third-party libraries
import { useProSidebar } from "react-pro-sidebar";
import moment from "moment";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

// MUI components
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  Stack,
  Tooltip,
  Popover,
} from "@mui/material";

// MUI hooks
import { useTheme } from "@mui/material/styles";

// MUI Icons
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// theme settings
import { tokens } from "../../theme";

const PlaylistCard = ({
  thumbnail,
  title,
  channelName,
  videos,
  playlistId,
  catagory,
  moreOptions,
}) => {
  const state = useSelector((state) => state.playlist);
  const recentPlaylists = useSelector((state) => state.recentPlaylists);
  const dispatch = useDispatch();
  const { items: playlists } = state;
  const { collapsed } = useProSidebar();
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);

  const navigateToWatch = () => {
    const videoId = playlists[playlistId].videos[0].videoContentDetails.videoId;
    if (!recentPlaylists.playlistId) {
      dispatch(
        setRecentPlaylist({
          playlistId,
          createdAt: new Date(),
        })
      );
    }
    navigate({
      pathname: `/watch`,
      search: `?${createSearchParams({
        v: videoId,
        list: playlistId,
        index: 1,
      })}`,
    });
  };
  return (
    <Card
      sx={{
        "& .MuiCardContent-root": {
          padding: ".25rem 1rem !important",
          "& .MuiBox-root": {
            "& .MuiPaper-root": {
              pb: ".8rem",
            },
          },
        },
        backgroundColor: theme.palette.secondary.main,
        cursor: "pointer",
      }}
    >
      <CardMedia
        component='img'
        sx={{ height: "50%" }}
        image={thumbnail}
        title='green iguana'
        onClick={navigateToWatch}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Tooltip title={title}>
          <Typography
            variant='body2'
            color='text.secondary'
            InfoText={title}
            textOverflow={title}
            onClick={navigateToWatch}
          >
            {title.slice(0, 40)}...
          </Typography>
        </Tooltip>
        <PopupState variant='popover'>
          {(popupState) => (
            <>
              <IconButton {...bindTrigger(popupState)}>
                <MoreVertIcon />
              </IconButton>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                sx={{
                  "& .MuiPaper-root": {
                    borderRadius: ".5rem",
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: colors.primary[500],
                    p: "1rem 0",
                    borderRadius: ".4rem",
                    boxShadow: theme.shadows[19],
                  }}
                >
                  {moreOptions.map((option) => (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: ".5rem",
                        p: ".2rem .5rem",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: colors.secondary[500],
                        },
                      }}
                      onClick={() => option.onClick(playlistId) }
                    >
                      <IconButton> {option.Icon} </IconButton>
                      <Typography
                        variant='body2'
                        sx={{
                          color: colors.gray[100],
                        }}
                      >
                        {" "}
                        {option.title}{" "}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Popover>
            </>
          )}
        </PopupState>
      </CardContent>

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: ".1rem",
          }}
          onClick={navigateToWatch}
        >
          <IconButton>
            <YouTubeIcon />
          </IconButton>
          <Typography
            variant='subtitle1'
            sx={{
              fontSize: ".8rem",
              color: colors.gray[100],
            }}
          >
            {channelName}{" "}
          </Typography>
        </Box>
        {catagory === "playlist" && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "1rem",
            }}
            onClick={navigateToWatch}
          >
            <Typography varient='body1'> Videos: </Typography>
            <Typography varient='body2'> {videos} </Typography>
          </Box>
        )}
        {catagory === "recentPlaylist" && (
          <Box>
            <Typography
              variant='body2'
              sx={{
                fontSize: ".8rem",
              }}
            >
              {" "}
              {moment().startOf("hour").fromNow()}{" "}
            </Typography>
          </Box>
        )}
      </CardContent>

      <Button
        sx={{
          width: "100%",
          "&:hover": {
            backgroundColor: colors.pinkAccent[500],
            "& .MuiSvgIcon-root": {
              color: colors.light[500],
            },
          },
        }}
        onClick={navigateToWatch}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1"}
          sx={{
            color: colors.blueAccent[500],
            "&:hover": {
              color: colors.light[500],
            },
            width: "100%",
            display: "flex",
          }}
        >
          <IconButton aria-label='Start learning'>
            <PlayCircleFilledWhiteOutlinedIcon
              fontSize='1rem'
              sx={{
                color: colors.pinkAccent[500],
                "&:hover": {
                  color: colors.light[500],
                },
              }}
            />
          </IconButton>
          <Typography
            variant='body2'
            fontFamily="'Roboto', sans-serif"
            fontWeight='bold'
          >
            Start Learning
          </Typography>
        </Stack>
      </Button>
    </Card>
  );
};

export default PlaylistCard;
