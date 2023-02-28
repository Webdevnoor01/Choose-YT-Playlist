import * as React from "react";

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
import { tokens } from "../../theme";

const AddNote = ({ open, scroll, handleClickOpen, handleClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  console.log("add note renderd");
  console.log(open);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
        sx={{
          width: "80%",
          height: "90%",
          m: "0 auto",
          [theme.breakpoints.down("md")]: {
            height: "50%",
            width: "100%",
            margin: "auto",
          },
          "& .MuiPaper-root": {
            height: "100%",
            width: "100%",
            backgroundColor:colors.secondary[500]
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
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <TextareaAutosize
              aria-label='empty textarea'
              placeholder='Enter your note'
              style={{
                width: "100%",
                height: "100%",
                outline: "none",
                resize: "none",
                border:"none",
                p:"0 .5rem",
                backgroundColor:colors.primary[500],
                color:colors.gray[100],
                fontSize:"1rem"

              }}
            />
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              p: ".5rem 1rem",
              backgroundColor: colors.pinkAccent[500],
              color:colors.light[100],
              "&:hover":{
                backgroundColor: colors.pinkAccent[600],

              }
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              p: ".5rem 1rem",
              backgroundColor: colors.blueAccent[500],
              color:colors.light[100],
              "&:hover":{
                backgroundColor: colors.blueAccent[600],

              }
            }}
          >
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddNote;
