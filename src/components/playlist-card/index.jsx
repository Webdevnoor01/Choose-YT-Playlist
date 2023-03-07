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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useNavigate, createSearchParams } from "react-router-dom";
import { useProSidebar } from "react-pro-sidebar";
import { tokens } from "../../theme";
import { useSelector } from "react-redux";

const PlaylistCard = ({ thumbnail, title, channelName, videos, playlistId }) => {
  const state = useSelector(state => state.playlist)
  const {items:playlists} = state
  const { collapsed } = useProSidebar();
  const theme = useTheme();
  const navigate =useNavigate()
  const colors = tokens(theme.palette.mode);

  const navigateToWatch = ()=>{
    const videoId = playlists[playlistId].videos[0].videoContentDetails.videoId
    navigate({
      pathname:`/watch`,
      search:`?${createSearchParams({v:videoId,list:playlistId, index:1})}`
    })
  }
  return (
    <Card
      sx={{
        
        "& .MuiCardContent-root": {
          padding: ".5rem 1rem !important",
        },
        backgroundColor: theme.palette.secondary.main,
        cursor:"pointer"
      }}
      onClick={navigateToWatch}
    >
      <CardMedia
        component='img'
        sx={{ height: "50%" }}
        image={thumbnail}
        title='green iguana'
      />
      <CardContent>
        <Typography
          variant='body2'
          color='text.secondary'
          InfoText={title}
        >
          {title.slice(0, 50)}...
        </Typography>
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
          component={Link}
          to='playlist'
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography varient='subtitle1'> Videos: </Typography>
          <Typography varient='subtitle1'> {videos} </Typography>
        </Box>
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
        LinkComponent={Link}
        to="/watch"
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
            fontWeight="bold"
          >
            Start Learning
          </Typography>
        </Stack>
      </Button>
    </Card>
  );
};

export default PlaylistCard;
