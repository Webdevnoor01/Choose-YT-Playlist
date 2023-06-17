// react

// react-redux
import { useDispatch, useSelector } from "react-redux";

//  actions
import { setNote } from "../../../store/noteSlice";

// react-hook-form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// third-party libraries
import * as qs from "query-string";
import shortid from "shortid";
import { Notyf } from "notyf";

// MUI Components
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextareaAutosize from "@mui/base/TextareaAutosize";

// MUI hooks
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../../theme";
import ButtonUI from "../../UI/button";

const AddNote = ({ open, scroll, handleClickOpen, handleClose }) => {
  const theme = useTheme();

  // input validation schema
  const schema = yup.object().shape({
    noteData: yup
      .string()
      .required("Please enter some text to add note")
      .min(4, "your note is too small")
      .max(2000, "your note is too long")
      .required("note can't be empty"),
  });

  // useForm hook
  const {
    formState: { errors },
    setValue,
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      noteData: "",
    },
    resolver: yupResolver(schema),
  });

  // destructuring query parameter from query strings
  const {
    v: videoId,
    list: playlistId,
    index,
  } = qs.default.parse(location.search);

  // current video and channelTitle from redux store.
  const currentVideo = useSelector(
    (state) =>
      state.playlist.items[playlistId]?.videos[index - 1].videoThumbnail
  );
  const channleTitle = useSelector(
    (state) => state.playlist.items[playlistId]?.channleTitle
  );
  const dispatch = useDispatch();

  const colors = tokens(theme.palette.mode);

  // show toast functionality using notyf third-party library
  const showToast = ({ type, message }) => {
    const toast = new Notyf({
      dismissible: true,
      duration: 4000,
      position: {
        x: "right",
        y: "top",
      },
      types: [
        {
          type: "success",
          background: "#3dc663",
          ripple: true,
          dismissible: true,
        },
        {
          type: "error",
          background: "#ec3d3d",
          ripple: true,
          dismissible: true,
        },
      ],
    });
    toast[type](message);
  };

  // if form input is valid then onValid function will executed.
  const onValid = (data) => {
    const noteObj = {
      noteId: shortid.generate(),
      videoId,
      playlistId,
      videoThumbnail: currentVideo.url,
      noteData: data.noteData,
      channleTitle,
    };
    showToast({
      type: "success",
      message: "Your note hasbeen created",
    });
    dispatch(setNote(noteObj));
    handleClose();
    setValue("noteData", "");
  };

  // if form input is  invalid then onValid function will executed.
  const onInValid = (errors) => {
    const errorKeys = Object.keys(errors);
    errorKeys.map((key) =>
      showToast({ type: "error", message: errors[key].message })
    );
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
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
            backgroundColor: colors.secondary[500],
          },

          "& .MuiDialogContent-root": {
            "& .MuiTypography-root": {
              height: "100% !important",
            },
          },
        }}
      >
        <DialogTitle id="scroll-dialog-title">Add Note</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <Controller
              name="noteData"
              control={control}
              render={(fields) => (
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Enter your note"
                  name="noteData"
                  style={{
                    width: "100%",
                    height: "100%",
                    outline: "none",
                    resize: "none",
                    border: "none",
                    p: "0 .5rem",
                    backgroundColor: colors.primary[500],
                    color: colors.gray[100],
                    fontSize: "1rem",
                  }}
                  {...fields.field}
                />
              )}
            />
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <ButtonUI
            text="cancel"
            onClick={handleClose}
            type="submit"
            style={{
              p: ".5rem 1rem",
              backgroundColor: colors.pinkAccent[500],
              color: colors.light[100],
              "&:hover": {
                backgroundColor: colors.pinkAccent[600],
              },
            }}
          />
          <ButtonUI
            text="save"
            onClick={handleSubmit(onValid, onInValid)}
            style={{
              p: ".5rem 1rem",
              backgroundColor: colors.blueAccent[500],
              color: colors.light[100],
              "&:hover": {
                backgroundColor: colors.blueAccent[600],
              },
            }}
          >
            save
          </ButtonUI>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddNote;
