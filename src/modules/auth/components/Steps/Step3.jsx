import StepCounter from "@/modules/auth/components/StepCounter";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { useState } from "react";
import store from "@/store/store.js";
import {
  registerFutsalOwner,
  createFutsalProfile,
} from "@/modules/auth/api/authApi";

const Step3 = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const verificationCode = store.getState().registerReducer.verificationCode;
  const [confirmationCode, setConfirmationCode] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });

  const onConfimationCodeChange = (e) => {
    const newValue = e.target.value;
    let isInvalid =
      newValue == "" ? true : newValue != verificationCode ? true : false;
    setConfirmationCode({
      ...confirmationCode,
      value: newValue,
      isInvalid: isInvalid,
      errorMessage:
        newValue == ""
          ? "This field can't be empty"
          : newValue != verificationCode
          ? "Code does not match"
          : null,
    });
    isInvalid ? setDisabled(true) : setDisabled(false);
  };

  const onConfirmationCodeBlur = (e) => {
    const newValue = e.target.value;
    let isInvalid =
      newValue == "" ? true : newValue != verificationCode ? true : false;
    setConfirmationCode({
      ...confirmationCode,
      isInvalid: isInvalid,
      errorMessage:
        confirmationCode.value == ""
          ? "This field can't be empty"
          : confirmationCode.value != verificationCode
          ? "Code does not match"
          : null,
    });
    isInvalid ? setDisabled(true) : setDisabled(false);
  };

  const handleRegistration = async () => {
    if (!confirmationCode.isInvalid) {
      try {
        setLoading(true);
        const ownerPayload = {
          email: store.getState().registerReducer.email,
          password: store.getState().registerReducer.password,
        };
        const response = await registerFutsalOwner(ownerPayload);
        console.log("RESPOSE: ", response);
        if (response.data) {
          const addressArray = store
            .getState()
            .registerReducer.location.split(",");
          const profilePayload = {
            name: store.getState().registerReducer.futsalName,
            userId: response.data._id,
            address: {
              street: addressArray[0],
              district: addressArray[1].trim(),
            },
            contact: store.getState().registerReducer.phoneNumber,
          };
          const profileResponse = await createFutsalProfile(profilePayload);
          console.log("PROFILE RESPONSE: ", profileResponse);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
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
        isDisabled={disabled}
        isLoading={loading}
        clickEvent={handleRegistration}
      />
    </>
  );
};

export default Step3;
