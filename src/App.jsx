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
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <NavBar getPlayListById={getPlaylistsById} playlists={playlists} />
        <Routes>
          <Route path="/" element={<Playlists playlists={playlists} />} />
          <Route path="/playlist/:playlistId" element={<Player playlists={playlists} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
