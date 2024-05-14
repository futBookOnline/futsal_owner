import { Input } from "@nextui-org/input";

const InputElement = ({ label, placement, placeholder, variant,description }) => {
  return (
    <Input
      label={label}
      labelPlacement={placement}
      variant={variant}
      placeholder={placeholder}
      description={description}
    />
  );
};

export default InputElement;
