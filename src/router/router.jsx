import { Navigate, createBrowserRouter } from "react-router-dom";
// import Register from "@/modules/auth/pages/Register";
import authRoutes from "@/modules/auth/AuthRoutes";
import dashboardRoutes from "@/modules/dashboard/DashboardRoutes";
import App from "@/App";
import Dashboard from "../modules/dashboard/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Navigate to="/auth" /> }, authRoutes],
  },
  dashboardRoutes,
]);

export default router;
