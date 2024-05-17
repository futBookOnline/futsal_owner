import StepCounter from "@/modules/auth/components/StepCounter";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { emailRegex } from "@/helpers/regex";

const Step2 = () => {
  const navigate = useNavigate();
  const handleSubmission = () => navigate("/auth/register/step_3");


  {
    /**state and validation for futsal name */
  }
  const [email, setEmail] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });

  const onEmailChange = (e) => {
    setEmail({
      ...email,
      value: e.target.value,
      isInvalid: e.target.value == "" ? true : false,
      errorMessage: e.target.value == "" ? "This field can't be empty" : null,
    });
  };
  const onEmailBlur = () => {
    setEmail({
      ...email,
      isInvalid: email.value == "" ? true : false,
      errorMessage: email.value == "" ? "This field can't be empty" : null,
    });
  };

  {
    /**state and validation for futsal address */
  }
  const [password, setPassword] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });

  const onPasswordChange = (e) => {
    setPassword({
      ...password,
      value: e.target.value,
      isInvalid: e.target.value == "" ? true : false,
      errorMessage: e.target.value == "" ? "This field can't be empty" : null,
    });
  };
  const onPasswordBlur = () => {
    setPassword({
      ...password,
      isInvalid: password.value == "" ? true : false,
      errorMessage:
        password.value == "" ? "This field can't be empty" : null,
    });
  };

  {
    /**state and validation for futsal address */
  }
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword({
      ...confirmPassword,
      value: e.target.value,
      isInvalid: e.target.value == "" ? true : false,
      errorMessage: e.target.value == "" ? "This field can't be empty" : null,
    });
  };
  const onConfirmPasswordBlur = () => {
    setConfirmPassword({
      ...confirmPassword,
      isInvalid: confirmPassword.value == "" ? true : false,
      errorMessage:
        confirmPassword.value == "" ? "This field can't be empty" : null,
    });
  };

  // const validate = () => {
  //   if (
  //     futsalName.value == "" ||
  //     futsalAddress.value == "" ||
  //     futsalPhoneNumber.value == ""
  //   ) {
  //     console.log("false");
  //     return false;
  //   }
  //   console.log("true");
  //   return true;
  // };

  // const onSubmitClick = () => {
  //   const isValid = validate();
  //   if (isValid) navigate("/auth/register/step_2");
  //   else alert("Input details first");
  // };

  const defaultInputStyle = "w-[20rem]"
  return (
    <>
      <StepCounter count={2} stepDescription="Setup Account" />

      <InputElement
        label="Email"
        placement="outside"
        placeholder="Enter your email"
        variant="bordered"
        onChange={onEmailChange}
        onBlur={onEmailBlur}
        isInvalid={email.isInvalid}
        errorMessage={email.errorMessage}
        customStyle={defaultInputStyle}
      />
      <InputElement
        label="Password"
        placement="outside"
        placeholder="Enter password"
        variant="bordered"
        onChange={onPasswordChange}
        onBlur={onPasswordBlur}
        isInvalid={password.isInvalid}
        errorMessage={password.errorMessage}
        customStyle={defaultInputStyle}
      />
      <InputElement
        label="Confirm Password"
        placement="outside"
        placeholder="Re-enter password"
        variant="bordered"
        onChange={onConfirmPasswordChange}
        onBlur={onConfirmPasswordBlur}
        isInvalid={confirmPassword.isInvalid}
        errorMessage={confirmPassword.errorMessage}
        customStyle={defaultInputStyle}
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
