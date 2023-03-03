import { Box, IconButton, InputBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { tokens } from "../../../theme";

const InputGroup = ({
  label,
  name,
  type,
  placeHolder,
  Icon,
  onChange,
  onBlur,
  onFocus,
  value,
  disabled,
  fullWidth
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      {label && (
        <Box
          component='label'
          htmlFor={name}
          sx={{
            color: colors.gray[100],
          }}
        >
          {label}
        </Box>
      )}
      <Box
        display='flex'
        alignItems='center'
        backgroundColor={`${
          disabled ? colors.blueAccent[600] : colors.secondary[500]
        }`}
        borderRadius='.5rem'
        color={colors.light[500]}
        margin='.3rem 0 1rem 0'
        p='.1rem .5rem .1rem 0'
        width={`${fullWidth ? "100%":null}`}
        sx={{
          [theme.breakpoints.down("md")]:{
            width:"100%"
          }
        }}
        
      >
        <InputBase
          type={type}
          name={name}
          placeholder={placeHolder}
          value={value}
          disabled={disabled}
          width={`${fullWidth ? "100%":null}`}

          disableInjectingGlobalStyles={
            {
              backgroundColor:"red"
            }
          }
          sx={{
            height: "100%",
            padding: ".5rem 1.5rem",
            borderRadius: ".5rem",
            backgroundColor: `${
              disabled ? colors.blueAccent[600] : colors.secondary[500]
            }`,
            color: `${disabled ? colors.light[500] : colors.gray[100]}`,
            [theme.breakpoints.down("md")]:{
              width:"100%"
            }
          }}
        />
        {Icon && (
          <IconButton>
            <Icon />
          </IconButton>
        )}
      </Box>
    </>
  );
};

export default InputGroup;
