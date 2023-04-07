// uuid
import shortid from "shortid";

// MUI Components
import { Box, Typography } from "@mui/material";

// MUI hooks
import { useTheme } from "@mui/material/styles";

// Components
import InputGroup from "../shared/input-group";
import ButtonUI from "../UI/button";
import { tokens } from "../../theme";

const ProfileEdit = ({ heading, button, inputs }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        backgroundColor: colors.primary[500],
        borderRadius: ".5rem",
        m: ".5rem 0",
        p: "1rem .5rem",
      }}
    >
      <Typography variant='body1'>{heading}</Typography>

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
          {inputs.map((input) => (
            <InputGroup
              key={shortid.generate()}
              type={input.type}
              placeHolder={input.placeHolder}
              fullWidth={input.fullWidth}
              value={input?.value}
              disabled={input?.disabled}
              style={{ mr: ".5rem" }}
            />
          ))}
        </Box>

        <ButtonUI
          text={button.text}
          style={{ ...button.style, mt: "1rem" }}
        />
      </Box>
    </Box>
  );
};

export default ProfileEdit;
