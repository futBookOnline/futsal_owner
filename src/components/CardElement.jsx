import { Card, CardBody } from "@nextui-org/react";

const CardElement = ({
  cardText,
  isPressable = true,
  isHoverable = true,
  clickEvent,
  bodyStyle,
  children,
  customClass,
}) => {
  return (
    <Card
      isPressable={isPressable}
      isHoverable={isHoverable}
      className={["basic_card hover:bg-slate-400 border-[.1rem] hover:border-slate-400", customClass]}
      onPress={clickEvent}
    >
      <CardBody className={bodyStyle}>
        {children ? children :
          <p>{cardText}</p>}
      </CardBody>
    </Card>
  );
};

export default CardElement;
