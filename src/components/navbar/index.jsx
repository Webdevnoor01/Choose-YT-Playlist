import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Stack from "@mui/material/Stack";
import PlaylistForm from "../playlist-form";

const NavBar = ({ getPlayListById }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPlayListId = (playlistId) => {
    console.log("getPlayListId called");
    getPlayListById(playlistId);
  };
  return (
    <Box color="default" sx={{ flexGrow: 1, marginBottom: "5rem", maxWidth:"1444px" }}>
      <AppBar color="default" position="fixed">
        <Toolbar>
          <Stack direction="row" gap="1" sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 .5rem",
              }}
              component="div"
            >
              <YouTubeIcon sx={{ fontSize: 50, color: "red" }} />
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 .5rem",
              }}
            >
              <Link to={"/"} sx={{textDecoration:"none"}} component={RouterLink} >Choose-YT-Playlist</Link>
            </Typography>
          </Stack>
          <Stack>
            <Button variant="contained" onClick={handleClickOpen}>
              Add Playlist
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <PlaylistForm
        open={open}
        handleClose={handleClose}
        getPlayListId={getPlayListId}
      />
    </Box>
  );
};

export default NavBar;
