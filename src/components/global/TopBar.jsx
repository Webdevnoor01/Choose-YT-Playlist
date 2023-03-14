// from store
import { useSelector, useDispatch } from "react-redux";
import {
  setSidebarToggle,
  setUserProfileToggle,
  setAddPlaylistToggle,
} from "../../store/toogleSlice";
import { setMode } from "../../store/modeSlice";

import { tokens } from "../../theme/index";
import { useTheme } from "@mui/material/styles";

// mui componetn
import { Box, InputBase, IconButton, Typography, Popover } from "@mui/material";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

// mui icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { useProSidebar } from "react-pro-sidebar";

// Components
import ButtonUI from "../UI/button";
import ProfileAction from "../UI/profile-action";

const TopBar = ({ auth }) => {
  const states = useSelector((state) => state);
  const dispatch = useDispatch();

  const { collapseSidebar, collapsed } = useProSidebar(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleMenuToggle = () => {
    collapseSidebar(!collapsed);
  };

  const handleToggleUser = () => {
    dispatch(setUserProfileToggle(!states.toggle.userProfileToggle));
  };

  const handleTogglePlaylist = () => {
    dispatch(setAddPlaylistToggle(!states.toggle.addPlaylistToggle));
  };

  const handleMode = () => {
    const newMode = states.mode.value === "dark" ? "light" : "dark";
    dispatch(setMode(newMode));
  };

  return (
    <Box
      display={"flex"}
      justifyContent='space-between'
      p={".3rem"}
      backgroundColor={colors.secondary[500]}
      color={colors.gray[100]}
      boxShadow={theme.shadows[1]}
      position='fixed'
      width='100vw'
      mb='2rem'
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        zIndex={"2000 !important"}
      >
        <IconButton
          onClick={handleMenuToggle}
          sx={{
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component='div'
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component='img'
            src='../../images/logo.png'
            sx={{
              height: "2rem",
              [theme.breakpoints.down("md")]: {
                height: "1.3rem",
              },
            }}
          ></Box>
        </Box>
      </Box>

      {!auth && (
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          backgroundColor={colors.primary[500]}
          borderRadius='3px'
          p='0 1rem'
          gap='2'
          color={colors.gray[500]}
          sx={{
            [theme.breakpoints.down("md")]: {
              backgroundColor: "transparent",
            },
          }}
        >
          <InputBase
            placeholder='Search playlist'
            sx={{
              color: colors.gray[200],
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      )}

      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        gap='1.5rem'
        pr='1rem'
        sx={{
          [theme.breakpoints.down("md")]: {
            gap: ".3rem",
          },
        }}
      >
        <ButtonUI
          text='add playlist'
          onClick={handleTogglePlaylist}
          mdNone={true}
          style={{
            backgroundColor:colors.pinkAccent[500],
            "&:hover":{
              backgroundColor:colors.pinkAccent[600],

            }
          }}
        />

        {!auth && (
          <IconButton
            onClick={handleTogglePlaylist}
            sx={{
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
          >
            <AddCircleOutlineOutlinedIcon sx={{ color: colors.icon[500] }} />
          </IconButton>
        )}

        <IconButton onClick={handleMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon sx={{ color: colors.pinkAccent[500] }} />
          ) : (
            <DarkModeOutlinedIcon
              sx={{
                color: colors.blueAccent[500],
              }}
            />
          )}
        </IconButton>
        {!auth && (
          <>
            <Typography
              variant='subtitle1'
              color={colors.gray[200]}
              sx={{
                wordBreak: "unset",
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              Abdun Nooor
            </Typography>
            <PopupState
              variant='popover'
              popupId='demo-popup-popover'
              sx={{
                zIndex: "1 !important",
              }}
            >
              {(popupState) => (
                <>
                  <IconButton
                    onClick={handleToggleUser}
                    {...bindTrigger(popupState)}
                  >
                    <AccountCircleOutlinedIcon
                      sx={{ color: colors.icon[500] }}
                    />
                  </IconButton>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    sx={{
                      top: "5.5px !important",

                      [theme.breakpoints.down("md")]: {
                        maxWidth: "100% !important",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "10rem",
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: ".5rem",
                        pt: "1rem",
                        backgroundColor: colors.primary[500],
                      }}
                    >
                      <ProfileAction
                        text={"profile"}
                        Icon={AccountBoxOutlinedIcon}
                        to='/profile'
                      />
                      <ProfileAction
                        text={"logout"}
                        Icon={LogoutOutlinedIcon}
                        to='/login'
                      />
                    </Box>
                  </Popover>
                </>
              )}
            </PopupState>
          </>
        )}

        {auth && (
          <>
            <ButtonUI
              text='login'
              style={{
                backgroundColor: colors.blueAccent[500],
                "&:hover": {
                  backgroundColor: colors.blueAccent[600],
                },
              }}
              to='/login'
            />

            <ButtonUI
              text='signup'
              style={{
                backgroundColor: colors.pinkAccent[500],
                "&:hover": {
                  backgroundColor: colors.pinkAccent[600],
                },
              }}
              to='/signup'
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default TopBar;
