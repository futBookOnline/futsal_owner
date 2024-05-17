// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/input";
// import { Button } from "@nextui-org/react";
// import { useState } from "react";
const InputElement = ({
  label,
  placement,
  placeholder,
  variant,
  description,
  onChange,
  isInvalid,
  errorMessage,
  onBlur,
  customStyle,
  type,
  endContent
}) => {

  return (
    <Input
      label={label}
      labelPlacement={placement}
      variant={variant}
      placeholder={placeholder}
      description={description}
      onChange={onChange}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      onBlur={onBlur}
      className={customStyle}
      type={type}
      endContent={endContent}
    />
  );
};

export default InputElement;
