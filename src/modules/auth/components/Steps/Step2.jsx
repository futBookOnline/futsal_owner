import StepCounter from "@/modules/auth/components/StepCounter";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const navigate = useNavigate();
  const handleSubmission = () => navigate("/auth/register/step_3");

  return (
    <>
      <StepCounter count={2} stepDescription="Setup Account" />

      <InputElement
        label="Email"
        placement="outside"
        placeholder="Enter your email"
        variant="bordered"
      />
      <InputElement
        label="Password"
        placement="outside"
        placeholder="Enter password"
        variant="bordered"
      />
      <InputElement
        label="Confirm Password"
        placement="outside"
        placeholder="Re-enter password"
        variant="bordered"
      />
      <ButtonElement
        label="Next"
        color="primary"
        customStyle="font-bold"
        clickEvent={handleSubmission}
      />
    </>
  );
};

export default Step2;
