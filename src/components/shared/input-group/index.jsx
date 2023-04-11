import React from "react";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../../theme";

const InputGroup = ({
  label,
  name,
  type,
  placeHolder,
  Icon,
  value,
  disabled,
  fullWidth,
  error,
  style,
  ...rest
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
        m=' 0.3rem 0px 1rem'
        p='.1rem .5rem .1rem 0'
        width={`${fullWidth ? 100 : null}%`}
        sx={{
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
          ...style,
        }}
      >
        {value && (
          <InputBase
            type={type}
            name={name}
            placeholder={placeHolder}
            value={value && value}
            disabled={disabled}
            {...rest.field}
            sx={{
              height: "100%",
              padding: ".5rem 1.5rem",
              borderRadius: ".5rem",
              backgroundColor: `${
                disabled ? colors.blueAccent[600] : colors.secondary[500]
              }`,
              color: `${disabled ? colors.light[500] : colors.gray[100]}`,
              width: `${fullWidth ? 100 : null}%`,
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          />
        )}

        {!value && (
          <InputBase
            type={type}
            name={name}
            placeholder={placeHolder}
            disabled={disabled}
            {...rest.field}
            sx={{
              height: "100%",
              padding: ".5rem 1.5rem",
              borderRadius: ".5rem",
              backgroundColor: `${
                disabled ? colors.blueAccent[600] : colors.secondary[500]
              }`,
              color: `${disabled ? colors.light[500] : colors.gray[100]}`,
              width: `${fullWidth ? 100 : null}%`,
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          />
        )}
        {Icon && (
          <IconButton>
            <Icon />
          </IconButton>
        )}
      </Box>
      <Box
        sx={{
          minHeight: "1.5rem",
        }}
      >
        {error && (
          <Typography
            sx={{
              color: "#ff1706",
              fontSize: "1rem",
              fontWeight: "bold",
              p: ".2rem 0",
            }}
          >
            {error}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default InputGroup;
