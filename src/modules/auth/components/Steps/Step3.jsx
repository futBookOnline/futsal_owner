import StepCounter from "@/modules/auth/components/StepCounter";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { useState } from "react";
import store from "@/store/store.js";
import {
  registerFutsalOwner,
  createFutsalProfile,
} from "@/modules/auth/api/authApi";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();
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
        if (response) {
          const addressArray = store
            .getState()
            .registerReducer.location.split(",");
          console.log(addressArray);
          const profilePayload = {
            name: store.getState()?.registerReducer?.futsalName,
            userId: response._id,
            address: {
              street: addressArray[0],
              district: addressArray[1]?.trim(),
            },
            contact: store.getState()?.registerReducer?.phoneNumber,
          };
          console.log("Code is working till here")
          const profileResponse = await createFutsalProfile(profilePayload);
          console.log("Is code working here??")
          console.log(profileResponse);
          if (profileResponse) {
            navigate("/onboarding", { state: profileResponse })
          }
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
