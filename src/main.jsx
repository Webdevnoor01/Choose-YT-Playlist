import { lazy, Suspense, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ProSidebarProvider } from "react-pro-sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = lazy(() => import("./App"));
// import App from "./App";
const FavoritePlaylist = lazy(() => import("./pages/favorite-playlist"));
const RecentPlaylist = lazy(() => import("./pages/recent-playlist"));
const Notes = lazy(() => import("./pages/notes"));
const Playlist = lazy(() => import("./pages/playlist"));
const History = lazy(() => import("./pages/history"));
import Signup from "./pages/signup";

// store provider
import { Provider } from "react-redux";
import store from "./store/store";

import { ThemeProvider } from "@emotion/react";
import Login from "./pages/login";
import VideoPlayer from "./pages/video-player";
import Profile from "./pages/profile";
import Note from "./pages/note";
import LayoutSkeletonAnimation from "./components/layout-skeleton-animation";

// animation skeleton
import PlaylistsSkeletonAnimation from "./components/playlists-skeleton-animation";
import "./index.css";
import Loading from "./components/loading-animation";

const router = createBrowserRouter([
  {
    element: (
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </Provider>
    ),
    path: "/",
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PlaylistsSkeletonAnimation />}>
            <Playlist />
          </Suspense>
        ),
      },
      {
        path: "favorite-playlists",
        element: (
          <Suspense fallback={<PlaylistsSkeletonAnimation />}>
            <FavoritePlaylist />
          </Suspense>
        ),
      },
      {
        path: "recent-playlists",
        element: (
          <Suspense fallback={<PlaylistsSkeletonAnimation />}>
            <RecentPlaylist />
          </Suspense>
        ),
      },
      {
        path: "history",
        element: (
          <Suspense fallback={<PlaylistsSkeletonAnimation />}>
            <History />
          </Suspense>
        ),
      },
      {
        path: "notes",
        element: (
          <Suspense fallback={<PlaylistsSkeletonAnimation />}>
            <Notes />
          </Suspense>
        ),
      },
      {
        path: "note",
        element: <Note />,
      },
      {
        path: "watch",
        element: <VideoPlayer />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/loading",
    element: <Loading />,
  },
  {
    path: "/anime",
    element: <LayoutSkeletonAnimation />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  </StrictMode>
);
