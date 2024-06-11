import { Select, SelectSection, SelectItem } from "@nextui-org/select";

const SelectElement = (props) => {
    const { items, label, placeholder, labelPlacement = "outside", selectionMode = "single", variant = "flat", className } = props;


    return <Select items={items} selectionMode={selectionMode} variant={variant} label={label} placeholder={placeholder} labelPlacement={labelPlacement} className={className} classNames={{
        listboxWrapper: "pt-0",
    }}>
        {
            items.map(item =>
                <SelectItem key={item.key}>
                    {item.label}
                </SelectItem>
            )
        }
    </Select>

}

export default SelectElement;