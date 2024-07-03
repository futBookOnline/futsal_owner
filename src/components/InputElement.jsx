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
  onValueChange,
  isInvalid,
  errorMessage,
  onBlur,
  customStyle,
  classNames,
  type,
  maxLength,
  endContent,
  value,
}) => {

  return (
    <Input
      label={label}
      labelPlacement={placement}
      variant={variant}
      placeholder={placeholder}
      description={description}
      onChange={onChange}
      onValueChange={onValueChange}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      onBlur={onBlur}
      className={customStyle}
      classNames={classNames}
      type={type}
      maxLength={maxLength}
      endContent={endContent}
      value={value && value}
    />
  );
};

export default InputElement;
