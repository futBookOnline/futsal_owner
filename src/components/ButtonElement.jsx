import { Button } from "@nextui-org/button";

const ButtonElement = ({
  label,
  size,
  radius,
  color,
  variant,
  startContent,
  endContent,
  isIconOnly,
  customStyle,
  clickEvent,
}) => {
  return (
    <Button
      size={size}
      radius={radius}
      color={color}
      variant={variant}
      startContent={startContent}
      endContent={endContent}
      isIconOnly={isIconOnly}
      className={customStyle}
      onPress={clickEvent}
    >
      {label}
    </Button>
  );
};

export default ButtonElement;
