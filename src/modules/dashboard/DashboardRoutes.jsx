import Dashboard from "@/modules/dashboard/pages/Dashboard";
import Home from "@/modules/dashboard/pages/Home";
import { Navigate } from "react-router-dom";
import Settings from "./pages/Settings";

const dashboardRoutes = {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {path:"/dashboard", element: <Navigate to="home"/>},
    { path: "home", element: <Home /> },
    { path: "settings", element: <Settings /> },
  ],
};

export default dashboardRoutes;
