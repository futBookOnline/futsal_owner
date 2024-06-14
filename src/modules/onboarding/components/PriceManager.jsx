import SelectElement from "@/components/SelectElement";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setNewPriceRange, priceList } from "../../../store/features/onboarding/priceList";

const PriceManager = ({ index, lastIndex, deleteRow }) => {
    const options = [
        {
            key: "1",
            label: "1"
        },
        {
            key: "2",
            label: "2"
        }
    ]




    return <div className="w-full flex items-end gap-6 mb-4">
        <SelectElement items={options} label="Start Time" placeholder="Select start time" variant="bordered" className="max-w-[15rem]" />
        <SelectElement items={options} label="End Time" placeholder="Select end time" variant="bordered" className="max-w-[15rem]" />
        <InputElement placeholder="Price" label="Enter rice" customStyle="max-w-[15rem]" variant="bordered" placement="outside" />
    </div>
}

export default PriceManager;