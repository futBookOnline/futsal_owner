import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import StepCounter from "@/modules/auth/components/StepCounter";
import { Outlet } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-screen flex">
      {/**Text section */}
      <div className="w-full h-screen flex items-center justify-center gap-20">
        {/**background image */}
        <div className="relative flex flex-col min-h-[20rem] items-start justify-center bg-[url('/src/assets/images/shade-2.png')] bg-contain bg-no-repeat">
          <p className="text-4xl font-semibold">Manage Futsal Booking</p>
          <p className="text-md font-medium">
            Register to organzie your futsal bookings
          </p>
        </div>
        {/**Registration form and steps */}
        <div className="flex flex-col gap-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Register;
