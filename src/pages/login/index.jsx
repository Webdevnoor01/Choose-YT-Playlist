import React, { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Redux actions
import { setUserProfile } from "../../store/userSlice";

// React router dom
import { useNavigate } from "react-router-dom";

// Mui
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { CardMedia, Typography, Box } from "@mui/material";

// MUI Icons
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

// Components
import InputGroup from "../../components/shared/input-group";
import ButtonUI from "../../components/UI/button";

// React hook form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// From input json
import inputObj from "./login.json";

// Custome Hooks
import useCheckAuth from "../../hooks/useCheckAuth";
import useLogin from "../../hooks/useLogin";
import useUserInit from "../../hooks/useUserInit";

// Utilities
import { showToast } from "../../utils/showToast";
const Login = () => {
  const { init } = useUserInit();
  const { isAuth } = useCheckAuth();
  const state = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);
  const { login, loading, error: loginERror } = useLogin();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
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
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  const formArr = Object.values(inputObj);
  const formIconObj = {
    AlternateEmailOutlinedIcon,
    HttpsOutlinedIcon,
  };

  const onValid = async (data) => {
    // console.log(data);
    const loginPayload = {
      password: data.password,
      identifier: data.userName,
    };
    const user = await login(loginPayload);
    console.log("user: ", user);
    if (user) {
      if (!user.isError) {
        // init();
        showToast({
          type: "success",
          message: "Loggedin successfully",
        });
        dispatch(setUserProfile(user));
        navigate("/");
      }
    }

    if (!user) {
      showToast({
        type: "error",
        message: "Invalid userName or password",
      });
    }

    if (user?.isError) {
      showToast({
        type: "error",
        message: "Invalid userName or password",
      });
    }
  };

  const onInValid = (errors) => {
    console.log(errors);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

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
          mt: "9.5rem",
          justifyContent: "center",
          alignItems: "flex-start",
        },
      }}
    >
      <Box
        component='form'
        onSubmit={handleSubmit(onValid, onInValid)}
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

        {formArr.map((formInput) => (
          <Controller
            name={formInput.name}
            control={control}
            render={(field) => (
              <InputGroup
                label={formInput.label}
                type={formInput.type}
                name={formInput.name}
                placeHolder={formInput.placeHolder}
                Icon={formIconObj[formInput.icon]}
                error={errors[formInput.name]?.message}
                fullWidth={true}
                {...field}
              />
            )}
          />
        ))}

        <ButtonUI
          text={loading ? "loading..." : "login"}
          disable={loading}
          type='submit'
          style={{
            p: ".6rem",
            "&:hover": {
              backgroundColor: colors.pinkAccent[500],
            },
            width: "100%",
          }}
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
