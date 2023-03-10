import { Box } from "@mui/material";
import React from "react";

// react-redux
import { useSelector, useDispatch } from "react-redux";

// Actions
import { removeRecentPlaylist } from "../../store/recentPlaylistSlice";
import { setAsFaroite } from "../../store/playlistSlice";



// third-party libraries
import shortid from "shortid";

// MUI icons
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// Components
import PlaylistCard from "../../components/playlist-card";

const RecentPlaylist = () => {
  const dispatch = useDispatch()
  const recentPlaylists = useSelector((state) => state.recentPlaylists);
  const playlists = useSelector((state) => state.playlist.items);
  const recentPlaylistArr = Object.keys(recentPlaylists);

  console.log("recentPlaylists: ", recentPlaylistArr);
  // The gridMinMaxObj is used to add grid size unit in grid minmax
  const gridMinMaxObj = {
    20: "px",
    1: "fr",
  };
  const removePlaylist = (playlistId) =>{
    dispatch(removeRecentPlaylist(playlistId))
  }
  const recentPlaylistMoreOption = [
    {
      title: "Remove from recent playlist",
      Icon: <RemoveCircleOutlineOutlinedIcon />,
      onClick: (playlistId) => {
        dispatch(removeRecentPlaylist(playlistId))

      },
    },
    {
      title: "add to favorite",
      Icon: <FavoriteBorderOutlinedIcon />,
      onClick: (playlistId) => {
        dispatch(setAsFaroite(playlistId))
      },
    },
  ];
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(255px, ${
          recentPlaylistArr.length < 4 && recentPlaylistArr.length !== 0
            ? 20
            : 1
        }${
          gridMinMaxObj[
            recentPlaylistArr.length < 4 && recentPlaylistArr.length !== 0
              ? 20
              : 1
          ]
        }))`,

        gap: "1rem",
      }}
    >
      {recentPlaylistArr.length === 0 && <h2>Empty recent playlist</h2>}
      {recentPlaylistArr.map((playlistId) => (
        <PlaylistCard
          key={shortid.generate()}
          playlistId={playlistId}
          channelName={playlists[playlistId].channelTitle}
          thumbnail={playlists[playlistId].playlistThumbnail.url}
          title={playlists[playlistId].playlistTitle}
          videos={playlists[playlistId].videos.length}
          catagory='recentPlaylist'
          moreOptions={recentPlaylistMoreOption}
        />
      ))}
    </Box>
  );
};

export default RecentPlaylist;
