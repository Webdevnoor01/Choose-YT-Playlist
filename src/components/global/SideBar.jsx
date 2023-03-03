import { useState } from "react";
import { Sidebar, MenuItem, Menu, useProSidebar } from "react-pro-sidebar";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { Box, Grid, Typography } from "@mui/material";

// mui icons
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from "react-router-dom";

// Menu Data
import menuItems from "../../jsons/sidebarMenu.json";

// Component
import Item from "../UI/Item";

const SideBar = () => {
  const { collapsed } = useProSidebar(false);
  const [selected, setSelected] = useState("Playlists");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const menuItemsArr= Object.values(menuItems)
  const iconsObj = {
    "PlaylistPlayOutlinedIcon": <PlaylistPlayOutlinedIcon/>,
    "FavoriteOutlinedIcon": <FavoriteOutlinedIcon/>,
    "VideoLibraryOutlinedIcon": <VideoLibraryOutlinedIcon/>,
    "HistoryOutlinedIcon": <HistoryOutlinedIcon/>,
    "TextSnippetOutlinedIcon": <TextSnippetOutlinedIcon/>,
    "SettingsOutlinedIcon":<SettingsOutlinedIcon/>

  }

  return (
    <Box
      sx={{
        mt: "2.8rem",
        "& .ps-sidebar-root": {
          border: "none",
          [theme.breakpoints.down("md")]: {
            width: "100vw !important",
          },
        },
        "& .ps-active.ps-menu-button": {
          backgroundColor: `${colors.secondary[700]} !important`,
          borderRadius: ".5rem",
          padding: "1.2rem",
        },
        "& .ps-menu-icon": {
          color: `${
            theme.palette.mode === "dark"
              ? colors.pinkAccent[500]
              : colors.dark[500]
          }`,
          m:"0 auto"
        },
        "& .ps-menu-button": {
          borderRadius: ".5rem",
          marginTop: "1rem",
          padding:"0 .6rem",
          "&:hover": {
            backgroundColor: `${colors.secondary[700]} !important`,
          },
        },
        [theme.breakpoints.down("md")]: {
          position: "fixed",
          bottom: 0,
          zIndex:1
        },
        "& .ps-menu-root": {
          "& ul": {
            [theme.breakpoints.down("md")]: {
              display: "flex",
              gap: " 0",
              justifyContent: "space-between",
            },
          },
        },
        "& .ps-menu-label":{
          [theme.breakpoints.up("md")]:{
            pl:"1rem"
          }
        },

        "& .MuiSvgIcon-root":{
          fontSize:"1.4rem"
        }
      }}
    >
      <Sidebar
        style={{
          height: "100%",
        }}
      >
        <Menu
          style={{
            height: "100%",
            backgroundColor: colors.secondary[500],
          }}
        >

          {
            menuItemsArr.map((menuItem, index) => (
              <Item
              key={index}
              title={menuItem.title}
              Icon={iconsObj[menuItem.icon]}
              to={menuItem.to}
              selected={selected}
              setSelected={setSelected}
            />
            ))
          }
         
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
