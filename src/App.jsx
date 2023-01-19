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

export default App;
