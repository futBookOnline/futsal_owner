import StepCounter from "@/modules/auth/components/StepCounter";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { useState } from "react";

const Step2 = () => {
  const [confirmationCode, setConfirmationCode] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });
  const code = 858373;
  const onConfimationCodeChange = (e) => {
    setConfirmationCode({
      ...confirmationCode,
      value: e.target.value,
      isInvalid:
        e.target.value == ""
          ? true
          : e.target.value != code
          ? true
          : false,
      errorMessage:
        e.target.value == ""
          ? "This field can't be empty"
          : e.target.value != code
          ? "Code does not match"
          : null,
    });
    console.log("ON CHANGE ERROR: ", e.target.value)
  };
  const onConfirmationCodeBlur = (e) => {
    setConfirmationCode({
      ...confirmationCode,
      isInvalid:
        confirmationCode.value == ""
          ? true
          : confirmationCode.value != code
          ? true
          : false,
      errorMessage:
        confirmationCode.value == ""
          ? "This field can't be empty"
          : confirmationCode.value != code
          ? "Code does not match"
          : null,
    });
  };

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
        onChange={onConfimationCodeChange}
        onBlur={onConfirmationCodeBlur}
        isInvalid={confirmationCode.isInvalid}
        errorMessage={confirmationCode.errorMessage}
      />
      <ButtonElement label="Finish" color="primary" customStyle="font-bold" />
    </>
  );
};

export default Step2;
