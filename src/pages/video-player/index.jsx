// React Hooks
import { useState, useEffect, Suspense, lazy } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// actins
import { setHistory } from "../../store/historySlice";
// React-Router-Dom
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
  useParams,
} from "react-router-dom";

// third-party libraries
import ReactPlayer from "react-player/youtube";
import * as qs from "query-string";
import shortid from "shortid";

// MUI Hooks
import { useTheme } from "@mui/material/styles";

// MUI Components
import { Box } from "@mui/system";

// MUI Icons
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";

// theme settings
import { tokens } from "../../theme";
import { IconButton, Typography } from "@mui/material";
import NoteItem from "../../components/shared";
import VideoList from "../../components/video-list";
import AddNote from "../../components/modals/add-note";

// Components
import ButtonUI from "../../components/UI/button";

// Custome Hooks
import useCheckAuth from "../../hooks/useCheckAuth";

const VideoPlayer = () => {
  const { isAuth } = useCheckAuth();

  const query = qs.default.parse(location.search);
  const playlist = useSelector((states) => states.playlist.items[query.list]);
  const notes = useSelector((states) => states.notes);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [isListCollapsed, setIsListCollapsed] = useState(true);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleListCollapsed = () => {
    setIsListCollapsed(!isListCollapsed);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const video = playlist.videos[query.index - 1];
    const videoHistoryObj = {
      playlistId: playlist.playlistId,
      videoId: video.videoContentDetails.videoId,
      videoIndex: query.index,
      thumbnail: video.videoThumbnail.url,
      title: video.videoTitle,
      channelName: playlist.channelTitle,
      watchedTime: 0,
    };
    dispatch(setHistory(videoHistoryObj));
  }, [query.list]);

  const handleVideoClick = (videoId, videoIndex) => {
    setSearchParams(
      createSearchParams({ v: videoId, list: query.list, index: videoIndex })
    );
    const video = playlist.videos[videoIndex - 1];
    const videoHistoryObj = {
      playlistId: playlist.playlistId,
      videoId: video.videoContentDetails.videoId,
      videoIndex: videoIndex,
      thumbnail: video.videoThumbnail.url,
      title: video.videoTitle,
      channelName: playlist.channelTitle,
      watchedTime: 0,
    };
    dispatch(setHistory(videoHistoryObj));
  };
  console.log("index: ", query.index);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          p: 0,
        }}
      >
        {/* video player */}
        <Box
          sx={{
            width: "100vw",
            height: "90vh",
            [theme.breakpoints.down("md")]: {
              height: "15rem",
            },
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${query.v}list=${
              query.list
            }&index=${query.index - 1}`}
            height='100%'
            width='100%'
            controls={true}
            playIcon={true}
            playing={true}
          />
        </Box>

        {/* notes */}
        <Box
          sx={{
            width: "50%",
            mt: "1rem",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          }}
        >
          {/* Add note btn */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ButtonUI
              text='add note'
              onClick={() => setOpen(!open)}
              style={{
                backgroundColor: colors.pinkAccent[500],
                padding: ".5rem 2rem",
                "&:hover": {
                  backgroundColor: colors.pinkAccent[600],
                },
              }}
            />
          </Box>

          {/* Individual note */}
          <Box
            sx={{
              maxHeight: "15rem",
              mt: "1rem",
              overflowY: "scroll",
            }}
          >
            {Object.values(notes).map((note, i) => (
              <NoteItem
                key={shortid.generate()}
                index={i}
                title={note.noteData.slice(0, 30)}
              />
            ))}
          </Box>
        </Box>

        {/* video list */}
        <Box
          sx={{
            padding: "1rem",
            width: "50%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            transition: "all .2s linear ",
            backgroundColor: colors.primary[500],

            [theme.breakpoints.down("md")]: {
              width: "100%",
              position: "absolute",
              bottom: "2rem",
              left: 0,
              padding: ".5rem 0",
              height: `${isListCollapsed ? "6rem" : "25rem"}`,
            },
          }}
        >
          {/* Video list border */}
          <Box
            sx={{
              backgroundColor: colors.blueAccent[500],
              width: "100%",
              padding: ".5rem 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: ".3rem",
              cursor: "pointer",
            }}
            onClick={handleListCollapsed}
          >
            {/* playlist icon */}
            <IconButton>
              <PlaylistPlayOutlinedIcon />
            </IconButton>

            {/* list info */}
            <Box>
              <Typography
                varient='body1'
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "cneter",
                }}
              >
                <Typography
                  variant='body2'
                  fontWeight='bold'
                >
                  Next:
                </Typography>
                <Typography variant='body2'>
                  {query.index === 1
                    ? playlist.videos[query.index].videoTitle.slice(0, 35)
                    : playlist.videos[query.index - 1].videoTitle.slice(0, 35)}
                  ...
                </Typography>
              </Typography>
              <Typography varient='body2'>
                {playlist.playlistTitle.slice(0, 24)}...{query.index}/
                {playlist.videos.length}
              </Typography>
            </Box>

            {/* list collapsesd icon */}
            <IconButton>
              {isListCollapsed && <KeyboardArrowDownOutlinedIcon />}
              {!isListCollapsed && <KeyboardArrowUpOutlinedIcon />}
            </IconButton>
          </Box>

          <Box
            sx={{
              maxHeight: `${isListCollapsed ? "0rem" : "14rem"}`,
              overflowY: "scroll",
              transition: "all .2s linear",
              mt: ".8rem",
              p: `${isListCollapsed ? "0rem .2rem" : "0 .2rem 1rem .2rem"}`,
              [theme.breakpoints.down("md")]: {
                backgroundColor: colors.secondary[500],
                maxHeight: `${isListCollapsed ? "0rem" : "18.5rem"}`,
              },
            }}
          >
            <VideoList
              channelTitle={playlist.channelTitle}
              videos={playlist.videos}
              onVideoClick={handleVideoClick}
            />
          </Box>
        </Box>

        <AddNote
          open={open}
          scroll={scroll}
          handleClose={handleClose}
        />
      </Box>
    </>
  );
};

export default VideoPlayer;
