// MUI Components
import { Box, CardMedia, Typography } from "@mui/material";

// MUI Hooks
import { useTheme } from "@mui/material/styles";

// Theme settings
import { tokens } from "../../theme/index";

// Components
import ButtonUI from "../../components/UI/button";
import InputGroup from "../../components/shared/input-group";
import { useState } from "react";
import ProfileEdit from "../../components/profile-edit";

const profileEditObj = {
  userInfo: {
    heading: "Edit user info",
    inputs: [
      {
        name:"name",
        type: "text",
        value: "Abdun Noor Faruki Biswas",
      },
      {
        name:"email",
        type: "email",
        value: "abdunnoor@gmail.com",
        disabled:true
      },
    ],
    button: {
      text: "Update user info",
      style: {},
    },
  },
  changePassword: {
    heading: "Change password",
    inputs: [
      {
        name:"oldPassword",
        type: "password",
        placeHolder: "Enter old password",
        fullWidth: true,
      },
      {
        name:"newPassword",
        type: "password",
        placeHolder: "Enter new password",
        fullWidth: false,
      },
      {
        name:"newConformPassword",
        type: "password",
        placeHolder: "Enter new conform password",
        fullWidth: false,
      },
    ],
    button: {
      text: "Save change password",
      style:{}
    },
  },
};

const Profile = () => {

  const [profileEditComponent, setProfileEditComponent] = useState("userInfo");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  profileEditObj.changePassword.button.style = {
    backgroundColor:colors.pinkAccent[500],
    "&:hover":{
      backgroundColor:colors.pinkAccent[600],

    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        p: ".6rem .5rem 0 .5rem",
        height: "100%",
        gap: ".5rem",
        flexWrap: "wrap",

        [theme.breakpoints.down("md")]: {
          mb: "12.5rem",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.secondary[500],
          width: "30%",
          height: "70%",
          borderRadius: ".5rem",

          [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "50%",
          },
          // [theme.breakpoints.down("md")]: {
          //   width: "100%",
          //   height: "90%",
          // },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            p: "1rem 0",
          }}
        >
          Abdun Noor
        </Typography>

        <Box
          sx={{
            p: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box
            sx={{
              height: "80%",
              width: "60%",
              [theme.breakpoints.down("sm")]: {
                width: "35%",
              },
              [theme.breakpoints.down("md")]: {
                width: "35%",
              },
            }}
          >
            <CardMedia
              component='img'
              src='../images/userProfile.jpg'
              sx={{
                maxWidth: "100%",
                borderRadius: "100%",
              }}
            />
          </Box>
          <ButtonUI
            text='Upload new photo'
            style={{
              m: "2rem 0",
              backgroundColor: colors.pinkAccent[500],
              "&:hover": {
                backgroundColor: colors.pinkAccent[600],
              },
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: colors.secondary[500],
          width: "68%",
          height: "100%",
          p: ".5rem",
          borderRadius: ".5rem",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <Typography
          variant='h5'
          m='1rem 0'
        >
          Edit Profile
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <ButtonUI
            text='User info'
            onClick={() => setProfileEditComponent("userInfo")}
          />

          <ButtonUI
            text='security'
            onClick={() => setProfileEditComponent("changePassword")}
            style={{
              backgroundColor: colors.pinkAccent[500],
              "&:hover": {
                backgroundColor: colors.pinkAccent[600],
              },
            }}
          />
        </Box>

        <ProfileEdit
          heading={profileEditObj[profileEditComponent].heading}
          button={profileEditObj[profileEditComponent].button}
          inputs={profileEditObj[profileEditComponent].inputs}
        />
        {/* <Box
          sx={{
            backgroundColor: colors.primary[500],
            borderRadius: ".5rem",
            m: ".5rem 0",
            p: "1rem .5rem",
          }}
        >
          <Typography variant='body1'>Edit user info</Typography>

          <Box component='form'>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <InputGroup
                type='text'
                value='Abdun Noor Faruki Biswas'
                disabled={false}
              />
              <InputGroup
                type='email'
                value='abdunnoor@gmail.com'
                disabled={true}
              />
            </Box>

            <ButtonUI text='Update user infor' />
          </Box>
        </Box> */}

        {/* <Box
          sx={{
            backgroundColor: colors.primary[500],
            borderRadius: ".5rem",
            m: ".5rem 0",
            p: "1rem .5rem",
          }}
        >
          <Typography variant='body1'>Change password</Typography>

          <Box component='form'>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <InputGroup
                type='password'
                placeHolder='Enter old password'
                fullWidth
              />
              <InputGroup
                type='password'
                placeHolder='Enter new password'
              />
              <InputGroup
                type='password'
                placeHolder='Enter new conform password'
              />
            </Box>

            <ButtonUI
              text='change password'
              style={{
                backgroundColor: colors.pinkAccent[500],
                "&:hover": {
                  backgroundColor: colors.pinkAccent[600],
                },
              }}
            />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Profile;
