<<<<<<< HEAD
// MUI components
import {
  Box,
  Card,
  CardActions,
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
import { Link } from "react-router-dom";
import { useProSidebar } from "react-pro-sidebar";
import { tokens } from "../../theme";

const PlaylistCard = ({ thumbnail, title, channelName, videos }) => {
  const { collapsed } = useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Card
      sx={{
        maxWidth: `${collapsed ? "290px" : "255px"}`,
        "& .MuiCardContent-root": {
          padding: ".5rem 1rem !important",
        },
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down("md")]: {
          maxWidth: "100%",
        },
      }}
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
          {title}
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
=======
import { Link as RouterLink, useNavigate,createSearchParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { PlayCircleFilled } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

const PlaylistCard = ({ thumbnail, playlistTitle, ChannelTitle, playlistId, videoId }) => {
  const navigate = useNavigate()
  const goToPlaylist = () =>{
    navigate({
      pathname:`/playlist/${playlistId}/watch`,
      search:`?${createSearchParams({v:videoId})}`
    })
  }
  return (
    <Card sx={{ maxWidth: 250, m: 1 }}>
      <CardMedia
        component="img"
        width={"100%"}
        image={thumbnail.url}
        alt="Paella dish"
      />
      <CardContent sx={{ padding: ".3rem" }}>
        <Typography
          variant="subtitle2"
          fontSize=".8rem"
          sx={{ minHeight: "2.5rem" }}
          color="text.secondary"
        >
          {playlistTitle.substr(0, 50)}
        </Typography>
        <Typography variant="subtitle2" color="CaptionText">
          {ChannelTitle}
        </Typography>
      </CardContent>
      <Button onClick={goToPlaylist}  LinkComponent={RouterLink} >
>>>>>>> main
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1"}
<<<<<<< HEAD
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
=======
          sx={{ padding: ".3rem .5rem", color: "#00c853" }}
        >
          <IconButton aria-label="Start learning">
            <PlayCircleFilled fontSize="1rem" sx={{ color: "#00c853" }} />
          </IconButton>
          <Typography variant="body2" >{"Start Learning"}</Typography>
>>>>>>> main
        </Stack>
      </Button>
    </Card>
  );
};

export default PlaylistCard;
