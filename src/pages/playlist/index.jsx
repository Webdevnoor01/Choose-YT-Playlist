import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

// react, redux
import { useSelector, useDispatch } from "react-redux";

// Actions
import {
  removePlaylist,
  setAsFaroite,
  setPlaylist,
} from "../../store/playlistSlice";

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

// third-party libraries
import shortid from "shortid";

// Utilities
import { showToast } from "../../utils/showToast";
import useCheckAuth from "../../hooks/useCheckAuth";
import useUserInit from "../../hooks/useUserInit";

const Playlist = () => {
  const { isAuth } = useCheckAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { init } = useUserInit();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const user = useSelector((state) => state.user);
  const playlists = useSelector((state) => state.playlist);
  const playlistArr = Object.values(playlists.items);

  const gridMinMaxObj = {
    20: "px",
    1: "fr",
  };
  const playlistMoreOption = [
    {
      title: "Remove from playlist",
      Icon: <RemoveCircleOutlineOutlinedIcon />,
      onClick: (playlistId, popupState) => {
        dispatch(removePlaylist({ playlistId }));
        popupState.close();
      },
    },
    {
      title: "add to favorite",
      Icon: <FavoriteBorderOutlinedIcon />,
      onClick: (playlistId, popupState) => {
        dispatch(setAsFaroite(playlistId));
        if (playlists.items[playlistId].isFavorite) {
          showToast({
            type: "error",
            message: "Already playlist added as a favorite",
          });
        } else {
          showToast({
            type: "success",
            message: "Playlist added as a favorite",
          });
        }
        popupState.close();
      },
    },
  ];

  useEffect(() => {
    if (user.playlists?.items) {
      init(user.playlists.items);
    }
  }, [user.playlists?.items]);
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [user.isAuth]);
  return (
    <>
      {playlistArr.length === 0 && !playlists?.loading && (
        <EmptyMessage message="No playlist Available" btnTxt="Add Playlist" />
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
          !playlists.items.isError &&
          playlistArr.map((playlist) => (
            <PlaylistCard
              key={shortid.generate()}
              title={playlist.playlistTitle}
              thumbnail={playlist.playlistThumbnail?.url}
              channelName={playlist.channelTitle}
              videos={playlist.videos.length}
              playlistId={playlist.playlistId}
              catagory="playlist"
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
            <Typography variant="body1">Loading...</Typography>{" "}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Playlist;
