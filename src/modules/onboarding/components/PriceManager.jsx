import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

//redux methods and reducers from the store
import { useDispatch, useSelector } from "react-redux";
import {
    addNewPriceRange,
    deletePriceRange,
    setCurrentRangeStartingTime,
    setCurrentRangeEndingTime,
    setCurrentRangePrice
} from "@/store/features/onboarding/priceList";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PriceManager = () => {

    const dispatch = useDispatch();
    const priceList = useSelector(state => state.priceListReducer);

    //adding new row
    const handleAddItem = () => dispatch(addNewPriceRange());

    //deleting current row
    const handleDeleteItem = (currentID) => {
        dispatch(deletePriceRange({ id: currentID }))
    }

    //changing starting time of the current row
    const handleStartTimeChange = (e, item) => {
        dispatch(setCurrentRangeStartingTime({ id: item.id, startingTime: e.target.value }))
    }

    //changing ending time of the current row
    const handleEndTimeChange = (e, item) => {
        dispatch(setCurrentRangeEndingTime({ id: item.id, endingTime: e.target.value }))
    }

    //chaning price of the current row
    const handlePriceChange = (e, item) => {
        dispatch(setCurrentRangePrice({ id: item.id, price: Number(e.target.value) }))
    }



    return (
        <div className="flex flex-col">
            <TransitionGroup>
                {
                    priceList.map((item, index) =>
                        <CSSTransition key={item?.id} classNames="slide-from-left" timeout={600}>
                            <div className="w-full flex items-end gap-6 mb-4">
                                <InputElement type="time" label="Starting Time" customStyle="max-w-[15rem]" variant="bordered" placement="outside"
                                    onChange={(e) => handleStartTimeChange(e, item)}
                                    onBlur={(e) => handleStartTimeChange(e, item)} />
                                <InputElement type="time" label="Ending Time" customStyle="max-w-[15rem]" variant="bordered" placement="outside"
                                    onChange={(e) => handleEndTimeChange(e, item)}
                                    onBlur={(e) => handleEndTimeChange(e, item)} />
                                <InputElement placeholder="Price" label="Enter rice" customStyle="max-w-[15rem]" variant="bordered" placement="outside"
                                    onChange={(e) => handlePriceChange(e, item)}
                                    onBlur={(e) => handlePriceChange(e, item)}

                                />
                                <ButtonElement
                                    isIconOnly={true}
                                    customStyle={["bg-danger text-white", index == 0 ? "hidden" : "block"]}
                                    icon="fa-solid fa-xmark"
                                    clickEvent={() => handleDeleteItem(item.id)} />
                            </div>
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
            {/* Button to add a new row */}
            <ButtonElement customStyle="max-w-fit" label="Add new item" startContent={<FontAwesomeIcon icon="fa-solid fa-plus" />} clickEvent={handleAddItem} />
        </div>
    )
}

export default PriceManager;