import * as React from "react";
// Redux & React-Redux
import { useDispatch, useSelector } from "react-redux";

// MUI Components
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// MUI hooks
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../../theme";

// Store
// actions
import { setAddPlaylistToggle } from "../../../store/toogleSlice";
import { fetchPlaylist } from "../../../store/playlistSlice";

// Components
import InputGroup from "../../shared/input-group";
import ButtonUI from "../../UI/button";

// React Hook Form
import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/material";

// Uitilities
import { showToast } from "../../../utils/showToast";

const AddPlaylistModal = () => {
  const {
    formState: { errors },
    handleSubmit,
    control,
    setError,
  } = useForm({
    defaultValues: {
      playlistId: "",
    },
  });
  const states = useSelector((state) => state);
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleCloseToggle = () => {
    dispatch(setAddPlaylistToggle(!states.toggle.addPlaylistToggle));
  };

  const onValid = (data) => {
    const { playlistId } = data;
    if (states.playlist.items[playlistId]) {
      showToast({
        type: "error",
        message: "You already added this playlist",
      });
      dispatch(setAddPlaylistToggle(!states.toggle.addPlaylistToggle));
      return;
    }
    if (!playlistId.includes("youtube.com")) {
      if (playlistId.slice(0, 2) == "PL") {
        dispatch(fetchPlaylist(playlistId));
        dispatch(setAddPlaylistToggle(!states.toggle.addPlaylistToggle));
        return;
      }
      showToast({
        type: "error",
        message: "Please enter valid playlist link or playlist id",
      });
      // setError("playlistId", {
      //   message: "Please enter valid playlist link or playlist id",
      // });
    }
    if (playlistId.includes("youtube.com")) {
      const splitPlaylistId = playlistId.split("=");
      console.log(splitPlaylistId[1].slice(0, 2));
      if (splitPlaylistId[1].slice(0, 2) !== "PL") {
        showToast({
          type: "error",
          message: "Please enter valid playlist link or playlist id",
        });
        dispatch(setAddPlaylistToggle(!states.toggle.addPlaylistToggle));
        return;
      }
      dispatch(fetchPlaylist(splitPlaylistId[1]));
      dispatch(setAddPlaylistToggle(!states.toggle.addPlaylistToggle));
    }
  };
  const onInValid = (errors) => {
    console.log(errors);
  };

  return (
    <div>
      <Dialog
        open={states.toggle.addPlaylistToggle}
        onClose={handleCloseToggle}
        sx={{
          width: "80%",
          height: "50%",
          m: "5rem auto",
          [theme.breakpoints.down("md")]: {
            height: "50%",
            width: "100%",
            margin: "auto",
          },
          "& .MuiPaper-root": {
            height: "100%",
            width: "100%",
            overflow: "none",
            backgroundColor: colors.primary[400],
            // color:colors.blueAccent[500]
          },

          "& .MuiDialogContent-root": {
            "& .MuiTypography-root": {
              height: "100% !important",
              overflow: "none",
            },
          },
        }}
      >
        <DialogTitle id='scroll-dialog-title'>Add Note</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id='scroll-dialog-description'
            tabIndex={-1}
          >
            <Box>
              <Controller
                name='playlistId'
                control={control}
                render={(field) => (
                  <InputGroup
                    label={"Playlist"}
                    type={"text"}
                    name='playlistId'
                    placeHolder='Enter valid playlist link or playlist id'
                    fullWidth={true}
                    {...field}
                    error={errors["playlistId"]?.message}
                  />
                )}
              />
            </Box>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <ButtonUI
            text='cancel'
            style={{
              p: ".5rem 1rem",
              backgroundColor: colors.pinkAccent[500],
              color: colors.light[100],
              "&:hover": {
                backgroundColor: colors.pinkAccent[600],
              },
            }}
            onClick={handleCloseToggle}
          />
          <ButtonUI
            text='save'
            type='submit'
            onClick={handleSubmit(onValid, onInValid)}
            style={{
              p: ".5rem 1rem",
              backgroundColor: colors.blueAccent[500],
              color: colors.light[100],
              "&:hover": {
                backgroundColor: colors.blueAccent[600],
              },
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddPlaylistModal;
