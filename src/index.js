import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Posts } from "./routes/Posts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NewPost } from "./routes/NewPost/NewPost";
import { RootLayout } from "./routes/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
