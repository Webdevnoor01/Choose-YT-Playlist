import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useProSidebar } from "react-pro-sidebar";
import SideBar from "../components/global/SideBar";
import TopBar from "../components/global/TopBar";
import { tokens } from "../theme";

const Layout = ({children}) => {
  const [selected, setSelected] = useState(false);
  const {collapsed} = useProSidebar()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log("selected: ", collapsed)

  return (
    <Box flexGrow={1}>
      <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
        <Grid item gridColumn="span 12">
          <TopBar onSelect={setSelected} selected={selected} />
        </Grid>
        
        <SideBar isCollaps={collapsed} />

        <Grid item gridColumn={ "span 11"} sx={{
          [theme.breakpoints.down("md")]:{
            gridColumn:"span 12"
          },
          height: "calc(100vh -  8px)",
          border:"2px solisd pink",

          [theme.breakpoints.down("md")]:{

            height: "calc(100vh -  100px)"
          }
        }} >
          <Box
            sx={{
              backgroundColor: colors.primary[500],
              height:"100%",
              mt: "2.8rem",
              overflowY:"scroll",
              pb:"4rem",
              [theme.breakpoints.down("md")]:{
                width:"100vw",
                pb:"8rem",
              }
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
