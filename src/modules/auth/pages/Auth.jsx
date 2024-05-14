import { Outlet } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";

const Auth = () => {
  return (
    <AuthLayout>
    <Outlet />
  </AuthLayout>
  );
};

export default Auth;
