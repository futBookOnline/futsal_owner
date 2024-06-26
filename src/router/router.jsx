import { Navigate, createBrowserRouter } from "react-router-dom";
// import Register from "@/modules/auth/pages/Register";
import authRoutes from "@/modules/auth/AuthRoutes";
import dashboardRoutes from "@/modules/dashboard/DashboardRoutes";
import App from "@/App";
import onboardibgRoutes from "@/modules/onboarding/onboardingRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Navigate to="/auth" /> }, authRoutes],
  },
  dashboardRoutes,
  onboardibgRoutes
]);

export default router;
