import StepCounter from "@/modules/auth/components/StepCounter";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const navigate = useNavigate();

  const handleSubmission = () => navigate("/auth/register/step_2");

  return (
    <>
      <StepCounter count={1} stepDescription="Futsal Details" />

      <InputElement
        label="Name"
        placement="outside"
        placeholder="Enter futsal name"
        variant="bordered"
      />
      <InputElement
        label="Address"
        placement="outside"
        placeholder="Enter futsal address"
        variant="bordered"
        description="Example: Kaushaltar, Bhaktapur"
      />
      <InputElement
        label="Phone Number"
        placement="outside"
        placeholder="Enter phone number"
        variant="bordered"
        description="Country code is not required"
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

export default Step1;
