import StepCounter from "@/modules/auth/components/StepCounter";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { useState } from "react";
import store from "@/store/store.js";

const Step3 = () => {
  const verificationCode = store.getState().registerReducer.verificationCode
  const [confirmationCode, setConfirmationCode] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });
  const onConfimationCodeChange = (e) => {
    setConfirmationCode({
      ...confirmationCode,
      value: e.target.value,
      isInvalid:
        e.target.value == "" ? true : e.target.value != verificationCode ? true : false,
      errorMessage:
        e.target.value == ""
          ? "This field can't be empty"
          : e.target.value != verificationCode
          ? "Code does not match"
          : null,
    });
    console.log("ON CHANGE ERROR: ", e.target.value);
  };
  const onConfirmationCodeBlur = (e) => {
    setConfirmationCode({
      ...confirmationCode,
      isInvalid:
        confirmationCode.value == ""
          ? true
          : confirmationCode.value != verificationCode
          ? true
          : false,
      errorMessage:
        confirmationCode.value == ""
          ? "This field can't be empty"
          : confirmationCode.value != verificationCode
          ? "Code does not match"
          : null,
    });
  };

  const handleRegistration = () => {};

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
        maxLength={6}
        onChange={onConfimationCodeChange}
        onBlur={onConfirmationCodeBlur}
        isInvalid={confirmationCode.isInvalid}
        errorMessage={confirmationCode.errorMessage}
      />
      <ButtonElement
        label="Finish"
        color="primary"
        customStyle="font-bold"
        clickEvent={handleRegistration}
      />
    </>
  );
};

export default Step3;
