import { Avatar } from "@nextui-org/react";

const AvatarElement = (props) => {
  const { isBordered, color, name, customClass } = props;

  return <Avatar isBordered={isBordered} color={color} name={name} className={customClass}/>;
};

export default AvatarElement;


