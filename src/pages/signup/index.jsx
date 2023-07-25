// React
import React, { useEffect } from "react";

// React Router Dom
import { Link, useNavigate } from "react-router-dom";

// Form Hook
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Mui
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { CardMedia, Typography, Box } from "@mui/material";

// MUI Icons
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import InputGroup from "../../components/shared/input-group";
import ButtonUI from "../../components/UI/button";

// hooks
import useCheckAuth from "../../hooks/useCheckAuth";

// input json
import inputObj from "./signpup.json";

import useRegister from "../../hooks/useRegister";

import { showToast } from "../../utils/showToast";

const Signup = () => {
  const { setCanRun } = useCheckAuth()

  // Form validation schema
  const { loading, register } = useRegister();
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(4)
      .max(20)
      .required("Your name must be under 4 to 25 charecter"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address format"),
    userName: yup.string().required("User Name is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password cannot be longer than 32 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      userName: "",
    },
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    let token = localStorage.getItem("authToken")
    if(token){
      navigate("/")
    }
    setCanRun(true)

    return () =>{
      setCanRun(false)
    }
  },[])
  const formArr = Object.values(inputObj);

  const iconObj = {
    PersonOutlineOutlinedIcon,
    AlternateEmailOutlinedIcon,
    HttpsOutlinedIcon,
  };

  const onValid = async (data) => {
    const registerPayload = {
      Name: data.name,
      email: data.email,
      password: data.password,
      username: data.userName,
      playlists: {
        items: [],
      },
      history: {
        items: [],
      },
      notes: {
        items: [],
      },
    };
    const user = await register(registerPayload);

    if (!user.isError) {
      showToast({
        type: "success",
        message: user.message,
      });
      navigate("/login");
    }
    if (user.isError) {
      showToast({
        type: "error",
        message: user.message,
      });
    }
  };

  const onInValid = (errors) => {
    console.log(errors);
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "80%",
        height: "100vh",
        m: "0 auto",
        [theme.breakpoints.down("md")]: {
          // alignItems:"flex-start"
          mt: "5rem",
          justifyContent: "center",
          alignItems: "flex-start",
        },
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onValid, onInValid)}
        sx={{
          width: "55%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Create Your Account</Typography>
        </Box>

        {formArr.map((formItem, i) => (
          <Controller
            control={control}
            name={formItem.name}
            key={i * 32 + 435}
            render={(field) => (
              <InputGroup
                label={formItem.label}
                type={formItem.type}
                name={formItem.name}
                placeHolder={formItem.placeHolder}
                Icon={iconObj[formItem.icon]}
                fullWidth={true}
                {...field}
                error={errors[formItem.name]?.message}
              />
            )}
          />
        ))}

        <ButtonUI
          text="signup"
          type="submit"
          style={{
            p: ".6rem 0",
            width: "100%",
            "&:hover": {
              backgroundColor: colors.pinkAccent[500],
            },
          }}
        />
      </Box>

      <Box
        component="div"
        sx={{
          width: "40%",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <CardMedia component="img" src="../../images/signup_bg_2.png" />
      </Box>
    </Box>
  );
};

export default Signup;
