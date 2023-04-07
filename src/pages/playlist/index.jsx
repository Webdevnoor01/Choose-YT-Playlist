import React from "react";

// react, redux
import { useSelector, useDispatch } from "react-redux";

// Actions
import { setAsFaroite } from "../../store/playlistSlice";

// MUI components
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// MUI icons
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// Custom Components
import PlaylistCard from "../../components/playlist-card";
import EmptyMessage from "../../components/empty-message";
import { tokens } from "../../theme";

const Playlist = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const playlists = useSelector((state) => state.playlist);
  const playlistArr = Object.values(playlists.items);

  // The gridMinMaxObj is used to add grid size unit in grid minmax
  const gridMinMaxObj = {
    20: "px",
    1: "fr",
  };
  const playlistMoreOption = [
    {
      title: "Remove from playlist",
      Icon: <RemoveCircleOutlineOutlinedIcon />,
      onClick: () => {},
    },
    {
      title: "add to favorite",
      Icon: <FavoriteBorderOutlinedIcon />,
      onClick: (playlistId) => {
        dispatch(setAsFaroite(playlistId));
      },
    },
  ];
  return (
    <>
      {playlistArr.length === 0 && !playlists?.loading && (
        <EmptyMessage
          message='No playlist Available'
          btnTxt='Add Playlist'
        />
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(255px, ${
            playlistArr.length < 4 && playlistArr.length !== 0 ? 290 : 1
          }${
            gridMinMaxObj[
              playlistArr.length < 4 && playlistArr.length !== 0 ? 20 : 1
            ]
          }))`,
          gap: ".5rem",
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          },
        }}
      >
        {playlistArr.length > 0 &&
          playlistArr.map((playlist) => (
            <PlaylistCard
              title={playlist.playlistTitle}
              thumbnail={playlist.playlistThumbnail.url}
              channelName={playlist.channelTitle}
              videos={playlist.videos.length}
              playlistId={playlist.playlistId}
              catagory='playlist'
              moreOptions={playlistMoreOption}
            />
          ))}
        {playlists.loading && (
          <Box
            sx={{
              minHeight: "316.188px",
              maxWidth: "270.5px",
              backgroundColor: theme.palette.secondary.main,
              color: colors.gray[100],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: ".5rem",
            }}
          >
            <Typography variant='body1'>Loading...</Typography>{" "}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Playlist;
