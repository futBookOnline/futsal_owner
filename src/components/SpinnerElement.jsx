import { Spinner } from "@nextui-org/react";

const SpinnerElement = (props) => {

    const { size, label, color, labelColor, classNames } = props


    return <Spinner size={size} label={label} color={color} labelColor={labelColor} classNames={classNames} />
}

export default SpinnerElement;