<<<<<<< HEAD
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
  const { pathname } = useLocation();
  const state = useSelector((state) => state);
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
=======
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/navbar/index";
import usePlaylist from "./hooks/usePlaylists";
import Playlists from "./components/playlists";
import Player from "./pages/player-page";
import "./app.css"

const App = () => {
  const { playlists, error, getPlaylistsById } = usePlaylist();
  console
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <NavBar getPlayListById={getPlaylistsById} />
        <Routes>
          <Route path="/" element={<Playlists/>} />
          <Route path="/playlist/:playlistId/watch" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
>>>>>>> main

export default App;
