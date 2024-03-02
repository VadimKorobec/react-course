import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NewPost } from "./components/NewPost/NewPost";
import { RootLayout } from "./routes/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-post",
    element: <NewPost />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
