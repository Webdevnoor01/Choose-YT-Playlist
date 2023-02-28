import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useProSidebar } from "react-pro-sidebar";
import SideBar from "../components/global/SideBar";
import TopBar from "../components/global/TopBar";
import { tokens } from "../theme";

const AuthLayout = ({children}) => {
  const [selected, setSelected] = useState(false);
  const {collapsed} = useProSidebar()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box flexGrow={1}>
      <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
        <Grid item gridColumn="span 12">
          <TopBar onSelect={setSelected} selected={selected} auth />
        </Grid>
        
        <Grid item gridColumn={ "span 12"} sx={{
          [theme.breakpoints.down("md")]:{
            gridColumn:"span 12"
          }
        }} >
          <Box
            sx={{
              backgroundColor: colors.primary[500],
              height: "calc(100vh - 54px)",
              mt: "2.8rem",
              p:"1rem",
             
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthLayout;

