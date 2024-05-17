import StepCounter from "@/modules/auth/components/StepCounter";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Step1 = () => {
  const navigate = useNavigate();
  // const isFormValidated = useState(false);

  {
    /**state and validation for futsal name */
  }
  const [futsalName, setFutsalName] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });

  const onFutsalNameChange = (e) => {
    setFutsalName({
      ...futsalName,
      value: e.target.value,
      isInvalid: e.target.value == "" ? true : false,
      errorMessage: e.target.value == "" ? "This field can't be empty" : null,
    });
  };
  const onFutsalNameBlur = () => {
    setFutsalName({
      ...futsalName,
      isInvalid: futsalName.value == "" ? true : false,
      errorMessage: futsalName.value == "" ? "This field can't be empty" : null,
    });
  };

  {
    /**state and validation for futsal address */
  }
  const [futsalAddress, setFutsalAddress] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });

  const onFutsalAddressChange = (e) => {
    setFutsalAddress({
      ...futsalAddress,
      value: e.target.value,
      isInvalid: e.target.value == "" ? true : false,
      errorMessage: e.target.value == "" ? "This field can't be empty" : null,
    });
  };
  const onFutsalAddressBlur = () => {
    setFutsalAddress({
      ...futsalAddress,
      isInvalid: futsalAddress.value == "" ? true : false,
      errorMessage:
        futsalAddress.value == "" ? "This field can't be empty" : null,
    });
  };

  {
    /**state and validation for futsal address */
  }
  const [futsalPhoneNumber, setFutsalPhoneNumber] = useState({
    value: "",
    isInvalid: null,
    errorMessage: null,
  });

  const onFutsalPhoneNumberChange = (e) => {
    setFutsalPhoneNumber({
      ...futsalPhoneNumber,
      value: e.target.value,
      isInvalid: e.target.value == "" ? true : false,
      errorMessage: e.target.value == "" ? "This field can't be empty" : null,
    });
  };
  const onFutsalPhoneNumberBlur = () => {
    setFutsalPhoneNumber({
      ...futsalPhoneNumber,
      isInvalid: futsalPhoneNumber.value == "" ? true : false,
      errorMessage:
        futsalPhoneNumber.value == "" ? "This field can't be empty" : null,
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
      <StepCounter count={1} stepDescription="Futsal Details" />

      <InputElement
        label="Name"
        placement="outside"
        placeholder="Enter futsal name"
        variant="bordered"
        onChange={onFutsalNameChange}
        onBlur={onFutsalNameBlur}
        isInvalid={futsalName.isInvalid}
        errorMessage={futsalName.errorMessage}
        customStyle={defaultInputStyle}
      />
      {/* {isFutsalNameInvalid} */}

      <InputElement
        label="Address"
        placement="outside"
        placeholder="Enter futsal address"
        variant="bordered"
        description="Example: Kaushaltar, Bhaktapur"
        onChange={onFutsalAddressChange}
        onBlur={onFutsalAddressBlur}
        isInvalid={futsalAddress.isInvalid}
        errorMessage={futsalAddress.errorMessage}
        customStyle={defaultInputStyle}
      />
      <InputElement
        label="Phone Number"
        placement="outside"
        placeholder="Enter phone number"
        variant="bordered"
        description="Country code is not required"
        onChange={onFutsalPhoneNumberChange}
        onBlur={onFutsalPhoneNumberBlur}
        isInvalid={futsalPhoneNumber.isInvalid}
        errorMessage={futsalPhoneNumber.errorMessage}
        customStyle={defaultInputStyle}
      />
      <ButtonElement
        label="Next"
        color="primary"
        customStyle="font-bold"
        // onClick={onSubmitClick}
      />
    </>
  );
};

export default Step1;
