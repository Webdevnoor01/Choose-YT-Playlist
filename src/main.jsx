<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { ProSidebarProvider } from "react-pro-sidebar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import FavoritePlaylist from "./pages/favorite-playlist";
import History from "./pages/history";
import Notes from "./pages/notes";
import Playlist from "./pages/playlist";
import RecentPlaylist from "./pages/recent-playlist";
import Signup from "./pages/signup";

// store provider
import { Provider } from "react-redux"
import store from "./store/store";

import { ThemeProvider } from "@emotion/react";
import Login from "./pages/login";
import VideoPlayer from "./pages/video-player";
import Profile from "./pages/profile";
import Note from "./pages/note";


const router = createBrowserRouter([
  {
    element:<Provider store={store} > <App /> </Provider>  ,
    path:"/",
    children:[
      {
        path:"/",
        element:<Playlist />
      },
      {
        path:"favorite-playlists",
        element:<FavoritePlaylist />
      },
      {
        path:"recent-playlists",
        element:<RecentPlaylist/>
      },
      {
        path:"history",
        element:<History/>
      },
      {
        path:"notes",
        element:<Notes />
      },
      {
        path:"note",
        element:<Note />
      },
      {
        path:"watch",
        element:<VideoPlayer/>
      },
      {
        path:"signup",
        element:<Signup/>
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"profile",
        element:<Profile/>
      },
      

    ]
  },
  
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ProSidebarProvider>
    <RouterProvider router={router} />
  </ProSidebarProvider>
  </React.StrictMode>
);
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store/store'
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>,
)
>>>>>>> main
