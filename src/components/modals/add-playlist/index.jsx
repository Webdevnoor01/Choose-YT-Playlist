import * as React from "react";
// Redux & React-Redux
import { useDispatch, useSelector } from "react-redux";

// MUI Components
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextareaAutosize from "@mui/base/TextareaAutosize";

// MUI hooks
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../../theme";

// Store
import { setAddPlaylistToggle } from "../../../store/toogleSlice";
import InputGroup from "../../shared/input-group";

const AddPlaylistModal = () => {
  const state = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleCloseToggle = () => {
    dispatch(setAddPlaylistToggle(!state.addPlaylistToggle));
  };

  console.log("add-playlist: ", state);
  return (
    <div>
      <Dialog
        open={state.addPlaylistToggle}
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
            overflow:"none"
          },

          "& .MuiDialogContent-root": {
            "& .MuiTypography-root": {
              height: "100% !important",
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
            <InputGroup
              label={"Playlist"}
              type={"text"}
              name='playlistId'
              placeHolder='Enter valid playlist link or playlist id'
            />
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleCloseToggle}
            sx={{
              p: ".5rem 1rem",
              backgroundColor: colors.pinkAccent[500],
              color: colors.light[100],
              "&:hover": {
                backgroundColor: colors.pinkAccent[600],
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleCloseToggle}
            sx={{
              p: ".5rem 1rem",
              backgroundColor: colors.blueAccent[500],
              color: colors.light[100],
              "&:hover": {
                backgroundColor: colors.blueAccent[600],
              },
            }}
          >
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddPlaylistModal;
