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
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box
        component='label'
        htmlFor={name}
        sx={{
          color:colors.gray[100]
        }}
      >
        {label}
      </Box>
      <Box
        display='flex'
        alignItems='center'
        backgroundColor={colors.secondary[500]}
        borderRadius='.5rem'
        color={colors.gray[100]}
        margin='.3rem 0 1rem 0'
        width='100%'
        p='.1rem .5rem .1rem 0'
      >
        <InputBase
          type={type}
          name={name}
          placeholder={placeHolder}
          sx={{
            height: "100%",
            width: "100%",
            padding: ".5rem 1.5rem",
            borderRadius: ".5rem",
            backgroundColor: colors.secondary[500],
            color:colors.gray[100]
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
