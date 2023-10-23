import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "../src/pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
