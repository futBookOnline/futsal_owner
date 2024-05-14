import { Navigate, createBrowserRouter } from "react-router-dom";
// import Register from "@/modules/auth/pages/Register";
import authRoutes from "@/modules/auth/AuthRoutes";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Navigate to="/auth" /> }, authRoutes],
  },
]);

export default router;
