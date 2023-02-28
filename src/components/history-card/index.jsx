// MUI component
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { tokens } from "../../theme";

const HistoryCard = ({ thumbnail, title, channelName, description }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Card
      sx={{
        [theme.breakpoints.up("md")]: {
          display: "flex",
        },
        justifyContent: "space-between",
        alignItems: "center",
        maxHeight: "200px",
        backgroundColor: colors.secondary[500],
        [theme.breakpoints.down("md")]: {
          maxHeight: "400px",
        },
        "&:hover":{
            "& .MuiCardActions-root":{
                visibility: "visible"
            }
        }
      }}
    >
      <CardContent
        sx={{
          padding: "0",
          [theme.breakpoints.up("md")]:{
            
          height: "100%",
          width: "90%",
          }
        }}
      >
        <CardMedia
          component='img'
          src={thumbnail}
          sx={{
            height: "100%",
          }}
        />
      </CardContent>

      <CardContent>
        <Typography variant='subtitle1'> {title} </Typography>
        <Typography variant='subtitle2'> {channelName} </Typography>
        <Typography variant='subtitle1'>
          {" "}
          {description.slice(0, 50)}{" "}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          visibility:"hidden"
        }}
      >
        <IconButton>
          <DeleteOutlineOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default HistoryCard;
