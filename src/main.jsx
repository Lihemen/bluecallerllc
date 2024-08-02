import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { MantineProvider } from "@mantine/core";

import router from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider
    withNormalizeCSS
    withGlobalStyles>
    <RouterProvider router={router} />
  </MantineProvider>
);
