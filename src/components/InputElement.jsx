import { Input } from "@nextui-org/input";

const InputElement = ({
  label,
  placement,
  placeholder,
  variant,
  description,
  onChange,
  isInvalid,
  errorMessage,
  onBlur
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
    />
  );
};

export default InputElement;
