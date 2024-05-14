import Auth from "@/modules/auth/pages/Auth";
import Register from "@/modules/auth/pages/Register";
import { Navigate } from "react-router-dom";
import Step1 from "@/modules/auth/components/Steps/Step1";
import Step2 from "@/modules/auth/components/Steps/Step2";
import Step3 from "@/modules/auth/components/Steps/Step3";

const authRoutes = {
  path: "/auth",
  element: <Auth />,
  children: [
    // Redirect from /auth to /auth/register
    { path: "/auth", element: <Navigate to="register" /> },
    {
      path: "register",
      element: <Register />,
      children: [
        { path: "/auth/register", element: <Navigate to="step_1" /> },
        { path: "step_1", element: <Step1 /> },
        { path: "step_2", element: <Step2 /> },
        { path: "step_3", element: <Step3 /> },
      ],
    },
  ],
};

export default authRoutes;
