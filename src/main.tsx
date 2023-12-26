import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root/Root.tsx";
import Prepare from "./pages/Prepare/Prepare.tsx";
import Summary from "./pages/Summary/Summary.tsx";
import About from "./pages/About/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/prepare",
    element: <Prepare />,
  },
  {
    path: "/summary",
    element: <Summary />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
