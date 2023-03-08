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
import AddPlaylistModal from "./components/modals/add-playlist";

function App() {
  const state = useSelector((state) => state);
  const { pathname } = useLocation();
  const { theme, colorMode } = useMode(state.mode.value);
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

        {/* Modals */}
        {state.toggle.addPlaylistToggle && <AddPlaylistModal open={state.toggle.addPlaylistToggle} />}
      </ProSidebarProvider>
    </ThemeProvider>
  );
}

export default App;
