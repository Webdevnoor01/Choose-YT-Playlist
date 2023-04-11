import React, { useEffect, useState } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";
// action
import { setSearchBoxToggle } from "../../../store/toogleSlice";

// third-party utitily libraries
import shortid from "shortid";

// Toast
import { showToast } from "../../../utils/showToast";

// MUI Components
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputBase,
  MenuItem,
  Select,
} from "@mui/material";

// MUI Hooks
import { useTheme } from "@mui/material/styles";
// Theme settings
import { tokens } from "../../../theme";
import { SearchOutlined } from "@mui/icons-material";
import SearchCard from "../../search-card";
import {
  findPlaylistById,
  findPlaylistByTitle,
  resetSearchResult,
} from "../../../store/playlistSlice";
import { createSearchParams, useNavigate } from "react-router-dom";

/**
 * 
 * height: "60%",
    maxWidth: "70%",
    backgroundColor: colors.secondary[500],
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
 */
const SearchBox = ({ open }) => {
  const toggle = useSelector((state) => state.toggle);
  const playlists = useSelector((state) => state.playlist);
  const playlistResult = useSelector((state) => state.playlist.searchResult);

  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("select");
  const [inWhere, setInWhere] = useState("select");

  const colors = tokens(theme.palette.mode);

  const handleCloseToggle = (e) => {
    console.log(e.target.className);
    if (e.target.className.includes("childDiv")) {
      return;
    }
    dispatch(setSearchBoxToggle(!toggle.searchBoxToggle));
    dispatch(resetSearchResult());
  };

  useEffect(() => {
    if (search !== "" && searchBy === "select" && inWhere === "select") {
      showToast({
        type: "error",
        message: "please select search by & search in",
      });
    }
    if (search && searchBy === "select" && inWhere === "select") {
      showToast({
        type: "error",
        message: "please select search by & search in",
      });
    }

    if (searchBy === "id" && inWhere === "playlist" && search) {
      dispatch(resetSearchResult());
      setTimeout(() => {
        console.log(search);
        dispatch(findPlaylistById(search));
      }, 700);
    }
    if (searchBy === "title" && inWhere === "playlist" && search) {
      dispatch(resetSearchResult());
      setTimeout(() => {
        console.log(search);
        dispatch(findPlaylistByTitle(search));
      }, 700);
    }
  }, [search]);

  const navigateToWatch = (playlistId) => {
    const videoId =
      playlists.items[playlistId].videos[0].videoContentDetails.videoId;
    dispatch(setSearchBoxToggle(!toggle.searchBoxToggle));
    dispatch(resetSearchResult());
    navigate({
      pathname: "/watch",
      search: `?${createSearchParams({
        v: videoId,
        list: playlistId,
        index: 1,
      })}`,
    });
  };
  const playlistResultArr = Object.values(playlistResult.items);
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        backgroundColor: "transparent",
        borderRadius: ".5rem",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(5px)",
          zIndex: -1,
        },
        [theme.breakpoints.down("md")]: {
          "& .first": {
            maxWidth: "98% !important",
          },
        },
      }}
      onClick={handleCloseToggle}
    >
      <div
        className={`childDiv first`}
        style={{
          height: "70%",
          maxWidth: "60%",
          backgroundColor: colors.secondary[500],
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "2",
          borderRadius: ".5rem",
          boxShadow: `${colors.secondary[900]} 0px 4px 20px`,
          border: `1px solid ${colors.blueAccent[500]}`,
        }}
      >
        <Box
          className='childDiv'
          component={"header"}
          style={{
            minHeight: "5rem",
            borderBottom: `1px solid ${colors.blueAccent[500]}`,
            color: colors.gray[100],
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <IconButton className='childDiv'>
            <SearchOutlined
              sx={{
                color: colors.blueAccent[500],
                fontSize: "2rem",
              }}
            />
          </IconButton>

          <input
            className='childDiv'
            style={{
              p: "2rem 0",
              maxWidth: "80%",
              border: "none",
              outline: "none",
              fontSize: "1.5rem",
              fontWeight: "300",
              backgroundColor: colors.secondary[500],
              color: colors.gray[100],
              // border: "1px solid pink",
              fontFamily: "sans-serif",
              borderRadius: ".5rem",
              padding: "1rem .5rem",
              "@media (max-width:768px)": {
                width: "80%",
              },
            }}
            placeholder='Search...'
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* TODO: I have to design select component as reusable */}
          <Select
            // labelId='demo-select-small'
            // id='demo-select-small'
            value={searchBy}
            sx={{
              border: `1px solid ${colors.blueAccent[500]}`,
              maxWidth: "50%",
            }}
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <MenuItem
              className='childDiv'
              value='select'
            >
              select search by
            </MenuItem>
            <MenuItem
              className='childDiv'
              value='id'
            >
              search by Id
            </MenuItem>
            <MenuItem
              className='childDiv'
              value='title'
            >
              search by title
            </MenuItem>
          </Select>

          <Select
            // labelId='demo-select-small'
            // id='demo-select-small'
            value={inWhere}
            sx={{
              border: `1px solid ${colors.blueAccent[500]}`,
              maxWidth: "50%",
            }}
            onChange={(e) => setInWhere(e.target.value)}
          >
            <MenuItem
              className='childDiv'
              value='select'
            >
              select search in
            </MenuItem>
            <MenuItem
              className='childDiv'
              value='playlist'
            >
              in playlist
            </MenuItem>
            <MenuItem
              className='childDiv'
              value='history'
            >
              in history
            </MenuItem>
            <MenuItem
              className='childDiv'
              value='recentPlaylists'
            >
              in recent playlist
            </MenuItem>
            <MenuItem
              className='childDiv'
              value='favoritePlaylists'
            >
              in favorite playlist
            </MenuItem>
          </Select>
        </Box>

        <Box
          sx={{
            overflowY: "scroll",
            position: "relative",
            height: "82%",
            [theme.breakpoints.down("sm")]: {
              height: "75%",
            },
          }}
          component={"main"}
        >
          {playlistResultArr.map((playlist) => (
            <SearchCard
              key={shortid.generate()}
              title={playlist.playlistTitle}
              thumbnail={playlist.playlistThumbnail.url}
              channelName={playlist.channelName}
              playlistId={playlist.playlistId}
              onClick={() => navigateToWatch(playlist.playlistId)}
            />
          ))}
        </Box>
      </div>
    </Box>
  );
};

export default SearchBox;
