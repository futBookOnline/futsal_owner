import { Button } from "@nextui-org/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    icon,
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
      {isIconOnly && icon ? <FontAwesomeIcon icon={icon} /> : label}
    </Button>
  );
};

export default ButtonElement;
