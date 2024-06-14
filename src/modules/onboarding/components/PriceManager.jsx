import SelectElement from "@/components/SelectElement";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setNewPriceRange, priceList } from "../../../store/features/onboarding/priceList";

const PriceManager = () => {
    const list = priceList;
    const deleteRow = (item) => {
        // const currentIndex = priceList.indexOf(item)
        console.log(item)
        const newPriceList = priceList.filter(el => el.id != item.id);
        setPriceList(newPriceList);
    }

    return <div>
        <div className="w-full flex flex-col items-start gap-6 mb-4">
            {
                list.map((item, index) =>
                    <div className="flex gap-6 items-end" key={index}>
                        <InputElement type="time" variant="bordered" label="Starting Time" placement="outside" customStyle="min-w-[10rem] max-w-[15rem]" />
                        <InputElement type="time" variant="bordered" label="Ending Time" placement="outside" customStyle="min-w-[10rem] max-w-[15rem]" />
                        <InputElement variant="bordered" label="Price" placement="outside" placeholder="Enter price" customStyle="min-w-[10rem] max-w-[15rem]" />
                        <ButtonElement isIconOnly={true} icon={"fa-solid fa-xmark"} color="danger" clickEvent={() => deleteRow(item)}
                            customStyle={index == 0 ? "hidden" : "block"} />
                        {
                            (index > 0) &&
                            <>


                                <p>
                                    {index}
                                </p>
                            </>
                        }
                    </div>
                )
            }




        </div>
    </div>
}

export default PriceManager;