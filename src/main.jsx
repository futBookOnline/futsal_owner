import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "@/index.css";
import router from "@/router/router.jsx";
import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import iconLibrary from "@/helpers/icons.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </NextUIProvider>
  </React.StrictMode>
);
