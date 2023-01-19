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
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1"}
          sx={{ padding: ".3rem .5rem", color: "#00c853" }}
        >
          <IconButton aria-label="Start learning">
            <PlayCircleFilled fontSize="1rem" sx={{ color: "#00c853" }} />
          </IconButton>
          <Typography variant="body2" >{"Start Learning"}</Typography>
        </Stack>
      </Button>
    </Card>
  );
};

export default PlaylistCard;
