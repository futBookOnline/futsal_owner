import { Progress } from "@nextui-org/progress";

const ProgressElement = ({
  size,
  color,
  radius,
  value,
  minValue,
  disableAnimation,
}) => {
  return (
    <Progress
      size={size}
      color={color}
      radius={radius}
      value={value}
      minValue={minValue}
      disableAnimation={disableAnimation}
    />
  );
};

export default ProgressElement;
