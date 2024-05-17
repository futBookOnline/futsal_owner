import StepCounter from "@/modules/auth/components/StepCounter";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { useState } from "react";

const Step2 = () => {
  const [confirmationCode, setConfirmationCode] = useState({
    value:"1234",
    isInvalid: null,
    errorMessage: null,
  })

  const onConfimationCodeChange = (e) => {
    setConfirmationCode({
      ...confirmationCode,
      value: e.target.value,
      isInvalid: e.target.value == "" ? true : false,
      errorMessage: e.target.value == "" ? "This field can't be empty" : null,
    });
  };
  const onConfirmationCodeBlur = (e) => {
    const code = e.target.value;
    setConfirmationCode({
      ...confirmationCode,
      isInvalid: code == "" ? true : !confirmationCode.value.match(code) ? true:false,
      errorMessage:
        confirmationCode.value == "" ? "This field can't be empty" : null,
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
