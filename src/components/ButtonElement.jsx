import { Button } from "@nextui-org/button";

const ButtonElement = (props) => {
  const {
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
    isDisabled,
  } = props;
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
      isDisabled={isDisabled}
    >
      {label}
    </Button>
  );
};

export default ButtonElement;
