// MUI components
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    IconButton,
    Stack,
  } from "@mui/material";
  import { useTheme } from "@mui/material/styles";
  
  import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
  import YouTubeIcon from "@mui/icons-material/YouTube";
  import { Link } from "react-router-dom";
  import { useProSidebar } from "react-pro-sidebar";
  import { tokens } from "../../theme";
  
  const NoteCard = ({ thumbnail, note, channelName}) => {
    const { collapsed } = useProSidebar();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Card
        sx={{
          maxWidth: `${collapsed ? "290px" : "255px"}`,
          "& .MuiCardContent-root": {
            padding: ".5rem 1rem !important",
          },
          backgroundColor: theme.palette.secondary.main,
          [theme.breakpoints.down("md")]: {
            maxWidth: "100%",
          },
        }}
      >
        <CardMedia
          component='img'
          sx={{ height: "100%" }}
          image={thumbnail}
          title='green iguana'
        />
        <CardContent>
          <Typography
            variant='body1'
            color='text.secondary'
            InfoText={note}
          >
            {note.slice(0, 50)}...
          </Typography>
        </CardContent>
 
        <Button
          sx={{
            width: "100%",
            "&:hover": {
              backgroundColor: colors.pinkAccent[500],
              "& .MuiSvgIcon-root": {
                color: colors.light[500],
              },
            },
          }}
          LinkComponent={Link}
          to="/note"
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"1"}
            sx={{
              color: colors.blueAccent[500],
              "&:hover": {
                color: colors.light[500],
              },
              width: "100%",
              display: "flex",
            }}
          >
            <IconButton aria-label='Start learning'>
              <PlayCircleFilledWhiteOutlinedIcon
                fontSize='1rem'
                sx={{
                  color: colors.pinkAccent[500],
                  "&:hover": {
                    color: colors.light[500],
                  },
                }}
              />
            </IconButton>
            <Typography
              variant='body2'
              fontFamily="'Roboto', sans-serif"
              fontWeight="bold"
            >
              Read note
            </Typography>
          </Stack>
        </Button>
      </Card>
    );
  };
  
  export default NoteCard;
  