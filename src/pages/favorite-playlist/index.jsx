import {useEffect } from "react"

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorite } from "../../store/playlistSlice";

// MUI Components
import { Box, Typography } from "@mui/material";

// MUI icons
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Components
import PlaylistCard from "../../components/playlist-card";
import EmptyMessage from "../../components/empty-message";
import useCheckAuth from "../../hooks/useCheckAuth";

const FavoritePlaylist = () => {
  const { isAuth, setCanRun } = useCheckAuth();
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlist.items);
  const playlistArr = Object.values(playlists);
  const favPlaylistArr = playlistArr.filter(
    (playlist) => playlist.isFavorite === true
  );

  useEffect(() => {
    setCanRun(true)

    return () => {
      setCanRun(false)
    }
  },[])
  const gridMinMaxObj = {
    20: "px",
    1: "fr",
  };
  const playlistMoreOption = [
    {
      title: "Remove from playlist",
      Icon: <RemoveCircleOutlineOutlinedIcon />,
      onClick: (playlistId) => {
        dispatch(removeFromFavorite(playlistId));
      },
    },
    {
      title: "remove from favorite",
      Icon: <FavoriteIcon />,
      onClick: (playlistId) => {
        dispatch(removeFromFavorite(playlistId));
      },
    },
  ];
  return (
    <>
      {favPlaylistArr.length === 0 && (
        <EmptyMessage
          message='No favorite playlist available'
          btnTxt='Go to playlist'
          to='/'
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
        }}
      >
        {favPlaylistArr.length > 0 &&
          favPlaylistArr.map((playlist) => (
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

        {/* {playlistArr.length === 0 && !playlists?.loading && <EmptyMessage />} */}
      </Box>
    </>
  );
};

export default FavoritePlaylist;
