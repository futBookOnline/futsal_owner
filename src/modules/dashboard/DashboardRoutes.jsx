import Dashboard from "@/modules/dashboard/pages/Dashboard";
import Home from "@/modules/dashboard/pages/Home";
import { Navigate } from "react-router-dom";
import Settings from "./pages/Settings";
import Bookings from "./pages/Bookings";
import Clients from "./pages/Clients";

const dashboardRoutes = {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {path:"/dashboard", element: <Navigate to="home"/>},
    { path: "home", element: <Home /> },
    { path: "settings", element: <Settings /> },
    { path: "bookings", element: <Bookings /> },
    { path: "clients", element: <Clients /> },
  ],
};

export default dashboardRoutes;
