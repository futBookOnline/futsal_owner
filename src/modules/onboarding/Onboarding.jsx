import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputElement from "@/components/InputElement";
import ButtonElement from "@/components/ButtonElement";
import SelectElement from "../../components/SelectElement";
import { useState } from "react";
import PriceManager from "./components/PriceManager";


const Onboarding = () => {

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

    const removeRow = (currentIndex) => {
        const newSetOfRows = rows.splice(currentIndex, 1);
        setRows([...rows, newSetOfRows])
    }

    const [currentRow, setCurrentRow] = useState(0)
    const [rows, setRows] = useState([< PriceManager index={currentRow} lastIndex={0} />]);



    const addItem = () => {
        // const rowNumber = currentRow + 1;
        // setCurrentRow(rowNumber)
        // setRows([...rows, <PriceManager index={rowNumber} lastIndex={rowNumber} deleteRow={() => removeRow(rowNumber)} />])
        const newRow = {
            startingTime: null,
            endingTime: null,
            price: null
        }

        setPriceList([...priceList, newRow])
    };

    const removeRow = (currentIndex) => {
        // console.log(currentIndex, rows)
        const newSetOfRows = rows.slice(currentIndex, currentIndex + 1);
        setRows([...rows], [...rows].concat(newSetOfRows))
        // console.log("Ater:", rows);
    }

    const [priceList, setPriceList] = useState([{
        id: Symbol(),
        startingTime: null,
        endingTime: null,
        price: null,
    }])




    return <div className="w-full    overflow-y-scroll flex flex-col gap-6 items-start justify-center px-20 py-20">
        <div className="w-full">
            <p className="text-2xl font-semibold">Onboarding</p>
            <p className="text-lg text-gray-600 font-medium">Enter necessary futsal details</p>
        </div>

        <div className="w-full flex flex-col gap-2" onClick={() => handleFileUpload}>
            <p className="text-lg font-medium">Futsal Photo</p>
            <div className="border-2 border-dashed flex flex-col items-center rounded-large py-3 cursor-pointer">
                <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-up" className="text-gray-600" />
                <p className="text-md text-gray-600 font-semibold">Upload an image</p>
                <p className="text-xs font-medium text-gray-600">Supported files: JPG, JPEG, PNG, SVG</p>
            </div>
        </div>

        <div className="w-full flex flex-col gap-2">
            <p className="text-lg font-medium">Futsal Location</p>
            <div className="border-2 border-dashed flex flex-col items-center rounded-large py-3 cursor-pointer">
                <FontAwesomeIcon icon="fa-solid fa-map-location-dot" className="text-gray-600" />
                <p className="text-md text-gray-600 font-semibold">Select exact location on map</p>
                <p className="text-xs font-medium text-gray-600">This will help uses to find your futsal when they turn on location</p>
            </div>
        </div>

        <div className="w-full flex flex-col gap-2">
            <p className="text-lg font-medium">Price</p>

            <PriceManager priceList={priceList} setPriceList={setPriceList} />
            {/* Button to add a new row */}
            <ButtonElement customStyle="max-w-fit" label="Add new item" startContent={<FontAwesomeIcon icon="fa-solid fa-plus" />} clickEvent={addItem} />

            {/* {
                rows.map(row =>
                    row
                )
            } */}

            {/* Existing JSX code */}
            {/* {rows.map((row, rowIndex) => (
                <>
                    <div key={rowIndex} className="w-full flex gap-4 items-end pb-4">
                        {row.selectElements.map((el, index) => (
                            <SelectElement key={index} items={el.items} label={el.label} placeholder={el.placeholder} variant="bordered" className="max-w-[15rem]" />
                        ))}
                        {row.inputElement.map((el, index) => (
                            <InputElement key={index} placeholder={el.placeholder} label={el.label} customStyle="max-w-[15rem]" variant="bordered" placement="outside" />
                        ))}
                        {
                            (rows.indexOf(row) == rows.length - 1 && rows.indexOf(row) != 0) &&
                            <ButtonElement isIconOnly={true} icon={"fa-solid fa-xmark"} color="danger" customStyle="p-0" clickEvent={deleteRow} />}
                        {rowIndex}
                    </div>
                </>
            ))} */}
            {/* Button to add a new row
            <ButtonElement customStyle="max-w-fit" label="Add new item" startContent={<FontAwesomeIcon icon="fa-solid fa-plus" />} clickEvent={addItem} /> */}
            {/* Next button */}
            <hr className="bg-[grey] my-[1.5rem] w-full h-[.1rem]" />
            <ButtonElement label="Next" customStyle="bg-primary-green text-md text-white font-semibold min-w-fit max-w-[15rem]" />
        </div>
    </div>
}

export default Onboarding;