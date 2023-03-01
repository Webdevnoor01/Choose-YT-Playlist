import { Box } from "@mui/system";
import React from "react";

// Mui
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import {
  Button,
  CardMedia,
  IconButton,
  Input,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import { HttpOutlined, SearchOutlined } from "@mui/icons-material";

// MUI Icons
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import InputGroup from "../../components/shared/input-group";
import { Link } from "react-router-dom";
import ButtonUI from "../../components/UI/button";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      component='div'
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "80%",
        height: "100%",
        m: "0 auto",
        [theme.breakpoints.down("md")]: {
          // alignItems:"flex-start"
          mt:"9.5rem",
          justifyContent: "center",
          alignItems:"flex-start"
        },
      }}
    >
      <Box
        component='form'
        sx={{
          width: "55%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <Box
          component='div'
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant='h5'>Login to your account</Typography>
        </Box>

        <InputGroup
          label='Email'
          type='email'
          name='email'
          placeHolder='Enter your email'
          Icon={AlternateEmailOutlinedIcon}
        />
        <InputGroup
          label='Password'
          type='password'
          name='password'
          placeHolder='Enter strong password'
          Icon={HttpsOutlinedIcon}
        />

        <ButtonUI 
        text='login'
        style={{
          p:".6rem",
          "&:hover": {
            backgroundColor: colors.pinkAccent[500],
          },
          width:"100%"
        }}
        to="/"
        />
      </Box>

      <Box
        component='div'
        sx={{
          width: "40%",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <CardMedia
          component='img'
          src='../../images/signup_bg_2.png'
        />
      </Box>
    </Box>
  );
};

export default Login;
