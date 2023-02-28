import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { ProSidebarProvider } from "react-pro-sidebar";
import { Outlet } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

// Layout
import Layout from "./layout";

// Hooks
import { useMode } from "./hooks/useMode";
import AuthLayout from "./auth-layout";

function App() {
  const { pathname } = useLocation();
  const state = useSelector((state) => state);
  const { theme, colorMode } = useMode(state.mode.value);
  console.log("location: ", location);
  return (
    <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <CssBaseline />
        {!(pathname == "/signup" || pathname == "/login") ?
          <Layout>
            <Outlet />
          </Layout>
        :null}
        {
          (pathname === "/signup" || pathname === "/login")? 
            <AuthLayout>
               <Outlet/>
            </AuthLayout>
          :null
        }
      </ProSidebarProvider>
    </ThemeProvider>
  );
}

export default App;
