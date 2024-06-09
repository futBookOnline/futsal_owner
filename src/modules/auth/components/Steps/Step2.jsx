import StepCounter from "@/modules/auth/components/StepCounter";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { emailRegex, passwordRegex } from "@/helpers/regex";
import PasswordError from "@/modules/auth/components/PasswordError";
import { useDispatch } from "react-redux";
import {
  setAccountDetails,
  setVerificationCode,
} from "@/store/features/auth/register";
import { sendVerificationEmail } from "@/modules/auth/api/authApi";

const Step2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[loading, setLoading] = useState(false)
  /**state and validation for futsal name */
  const [email, setEmail] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });

  const onEmailChange = (e) => {
    setEmail({
      ...email,
      value: e.target.value,
      isInvalid:
        e.target.value == ""
          ? true
          : !emailRegex.test(e.target.value)
          ? true
          : false,
      errorMessage:
        e.target.value == ""
          ? "This field can't be empty"
          : !emailRegex.test(e.target.value)
          ? "Enter a valid email"
          : null,
    });
  };
  const onEmailBlur = () => {
    setEmail({
      ...email,
      isInvalid:
        email.value == "" ? true : !emailRegex.test(email.value) ? true : false,
      errorMessage:
        email.value == ""
          ? "This field can't be empty"
          : !emailRegex.test(email.value)
          ? "Enter a valid email"
          : null,
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
      isInvalid:
        e.target.value == ""
          ? true
          : !passwordRegex.test(e.target.value)
          ? true
          : false,
      errorMessage:
        e.target.value == "" ? (
          "This field can't be empty"
        ) : !passwordRegex.test(e.target.value) ? (
          <PasswordError />
        ) : null,
    });
  };
  const onPasswordBlur = () => {
    setPassword({
      ...password,
      isInvalid:
        password.value == ""
          ? true
          : !passwordRegex.test(password.value)
          ? true
          : false,
      errorMessage:
        password.value == "" ? (
          "This field can't be empty"
        ) : !passwordRegex.test(password.value) ? (
          <PasswordError />
        ) : null,
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
      isInvalid:
        e.target.value == ""
          ? true
          : e.target.value != password.value
          ? true
          : false,
      errorMessage:
        e.target.value == ""
          ? "This field can't be empty"
          : e.target.value != password.value
          ? "Passwords do not match"
          : null,
    });
  };
  const onConfirmPasswordBlur = () => {
    setConfirmPassword({
      ...confirmPassword,
      isInvalid:
        confirmPassword.value == ""
          ? true
          : confirmPassword.value != password.value
          ? true
          : false,
      errorMessage:
        confirmPassword.value == ""
          ? "This field can't be empty"
          : confirmPassword.value != password.value
          ? "Passwords do not match"
          : null,
    });
  };

  const onSubmitClick = async () => {
    const isValid = (value) => value.isInvalid !== null && !value.isInvalid;
    const isFormValid = [email, password, confirmPassword].every(isValid);
    if (isFormValid) {
      setLoading(true)
      const response = await sendVerificationEmail(email.value);
      //updating store
      const payload = {
        email: email.value,
        password: password.value,
        verificationCode: response.data.data.verificationCode,
      };
      dispatch(setAccountDetails(payload));
      dispatch(setVerificationCode(payload));
      //navigating to next page
if(response) setLoading(false)
      // get verification code from above function
      navigate("/auth/register/step_3");
    } else {
      //handling empty field errors
      if (email.isInvalid === null)
        setEmail({
          ...email,
          isInvalid: true,
          errorMessage: "This field can't be empty.",
        });
      if (password.isInvalid === null)
        setPassword({
          ...password,
          isInvalid: true,
          errorMessage: "This field can't be empty.",
        });
      if (confirmPassword.isInvalid === null)
        setConfirmPassword({
          ...confirmPassword,
          isInvalid: true,
          errorMessage: "This field can't be empty.",
        });
    }
  };

  const defaultInputStyle = "w-[20rem]";
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
        isLoading = {loading}
        clickEvent={onSubmitClick}
      />
    </>
  );
};

export default Step2;
