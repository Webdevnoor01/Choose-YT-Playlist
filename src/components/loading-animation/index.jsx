import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { setPlaylist } from "../../store/playlistSlice";
import getPlaylists from "../../api/getPlaylists";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useUserInit from "../../hooks/useUserInit";
const Loading = () => {
  const isCustom = useMediaQuery("( (max-width: 768px)");
  const { init } = useUserInit();

  useEffect(() => {
    init();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: `${isCustom ? "flex-start" : "center"}`,
        minHeight: "100vh",
        backgroundColor: "#0a1929",
        pt: "10rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "-webkit-box-reflect": "below 1px linear-gradient(#0001, #0004)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: `${isCustom ? 120 : 200}px`,
            width: `${isCustom ? 120 : 200}px`,
            borderRadius: "50%",
            backgroundColor: "#0d2323",
            animation: "animate 2s linear infinite",
            "@keyframes animate": {
              "0%": {
                transform: "rotate(0deg)",
              },
              "100%": {
                transform: "rotate(360deg)",
              },
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "50%",
              height: "100%",
              background:
                "linear-gradient(to top, transparent, rgba(0, 255, 249, 0.4))",
              backgroundSize: "100px 180px",
              backgroundRepeat: "no-repeat",
              borderTopLeftRadius: "100px",
              borderBottomLeftRadius: "100px",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: `${isCustom ? 10 : 20}px`,
              height: `${isCustom ? 10 : 20}px`,
              borderRadius: "50%",
              zIndex: "10",
              background: "#00fff9",
              boxShadow:
                "0 0 10px #00fff9, 0 0 20px #00fff9, 0 0 30px #00fff9, 0 0 40px #00fff9, 0 0 50px #00fff9, 0 0 60px #00fff9, 0 0 70px #00fff9, 0 0 80px #00fff9, 0 0 90px #00fff9, 0 0 100px #00fff9",
            },
          }}
        >
          <Box
            component={"span"}
            sx={{
              position: "absolute",
              top: `${isCustom ? 10 : 20}px`,
              left: `${isCustom ? 10 : 20}px`,
              right: `${isCustom ? 10 : 20}px`,
              bottom: `${isCustom ? 10 : 20}px`,
              background: "#102626",
              borderRadius: "50%",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Loading;
