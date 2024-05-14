import StepCounter from "@/modules/auth/components/StepCounter";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";

const Step2 = () => {
  return (
    <>
      <StepCounter count={3} stepDescription="Verify and complete" />

      <p className="text-sm font-semibold">
        A confirmation code is sent to your email
      </p>

      <InputElement
        label="Confirmation code"
        placement="outside"
        placeholder="Enter confirmation code"
        variant="bordered"
      />
      <ButtonElement label="Finish" color="primary" customStyle="font-bold" />
    </>
  );
};

export default Step2;
