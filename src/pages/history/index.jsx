import React from "react";

// MUI component
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DeleteOutlineOutlined, SearchOutlined } from "@mui/icons-material";
import { maxWidth } from "@mui/system";
import { tokens } from "../../theme";

// Custom Components
// import HistoryCard from "../../history-card";
import HistoryCard from "../../components/history-card";
import { useSelector } from "react-redux";
import EmptyMessage from "../../components/empty-message";

const playlist = {
  title: "একজন ডেভেলপার হিসেবে কিভাবে চাকরি পাবেন? How to get hired?",
  thumbnail:
    "https://i.ytimg.com/vi/j37Yp_aJCDc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATvQ12h3WTl_-EsvaHNBonY4JEog",
  channelName: "Procoder BD",
  description:
    "slkdfj dsfjlsdkf djfsafl sdfhl iertkb sdhkj aeri fida ewruio skjfh ifjaoewf fsah ioewf sfd hoi shf ewfio fsajh fasjh feih fhkj feaoij fsdfo ",
};

const History = () => {
  const states = useSelector((state) => state);
  const historyArr = Object.values(states.history.items);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
          [theme.breakpoints.down("md")]: {
            pb: "7rem",
          },
        }}
      >
        {historyArr.length === 0 && (
          <EmptyMessage
            message='no history available'
            btnTxt='go to playlist'
            to='/'
            styles={{
              width: "70%",
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          />
        )}

        {historyArr.length > 0 && (
          <Box
            sx={{
              maxWidth: "60%",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              [theme.breakpoints.down("md")]: {
                maxWidth: "100%",
              },
            }}
          >
            {historyArr.map((video) => (
              <HistoryCard
                thumbnail={video.thumbnail}
                title={video.title}
                channelName={video.channelName}
                videoId={video.videoId}
                videoIndex={video.videoIndex}
                playlistId={video.playlistId}
              />
            ))}
          </Box>
        )}

        <Box
          sx={{
            maxWidth: "35%",
            gap: "2rem",
            [theme.breakpoints.down("md")]: {
              display: "none",
              width: 0,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: colors.secondary[500],
            }}
          >
            <IconButton>
              {" "}
              <SearchOutlined />{" "}
            </IconButton>
            <InputBase placeholder='Search history...' />
          </Box>
          <Button
            sx={{
              padding: "38px 0px",
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={"1"}
              sx={{
                padding: ".3rem .5rem",
                backgroundColor: colors.btn[500],
                color: colors.gray[500],
                borderRadius: ".2rem",
                "&:hover": {
                  backgroundColor: colors.btn[600],
                },
              }}
            >
              <IconButton aria-label='Clear all watch history'>
                <DeleteOutlineOutlined fontSize='1rem' />
              </IconButton>
              <Typography variant='body1'>Clear all watch history</Typography>
            </Stack>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default History;
