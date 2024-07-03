import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonElement from "@/components/ButtonElement";
import { useEffect, useState } from "react";
import PriceManager from "./components/PriceManager";
import UploadElement from "@/components/UploadElement";

import { useSelector } from "react-redux";

import { submitFutsalData } from "./api/onboardingApi"; 
import { useLocation } from "react-router-dom";





const Onboarding = () => {

    const priceList = useSelector(state => state.priceListReducer);

    const [file, setFile] = useState(null)

    const userID = useLocation().state._id;
    console.log(userID);


    const handleFileUpload = (fileCollection) => {
        setFile(fileCollection);
        console.log(fileCollection);
      };
    
      const [isLoading, setIsLoading] = useState(false);
    
      const handleSubmit = async () => {
        setIsLoading(true);
    
        if (!file) {
          console.error("No file selected");
          setIsLoading(false);
          return;
        }
    
        const formData = new FormData();
        formData.append("file", file[0]);
        formData.append("priceList", JSON.stringify(priceList));
    
        try {
          const result = await submitFutsalData(formData, userID);
          console.log("API response:", result);
          // Handle response as needed
        } catch (error) {
          console.error("Error submitting data:", error);
          // Handle error appropriately
        } finally {
          setIsLoading(false);
        }
      };


    //changing the label based
    const [submitLabel, setSubmitLabel] = useState("Next")
    useEffect(() => {
        let label;
        isLoading ? label = "Loading" : label = "Next";
        setSubmitLabel(label)
    }, [isLoading])


    return <div className="w-full    overflow-y-scroll flex flex-col gap-6 items-start justify-center px-20 py-20">
        <div className="w-full">
            <p className="text-2xl font-semibold">Onboarding</p>
            <p className="text-lg text-gray-600 font-medium">Enter necessary futsal details</p>
        </div>

        <div className="w-full flex flex-col gap-2">
            <p className="text-lg font-medium">Futsal Photo</p>
            {/* <div className="border-2 border-dashed flex flex-col items-center rounded-large py-3 cursor-pointer relative overflow-hidden" >
                <input type="file" className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer" onChange={handleFileUpload}
                    accept="image/png image/jpeg image/svg" />
                <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-up" className="text-gray-600" />
                <p className="text-md text-gray-600 font-semibold">Upload an image</p>
                <p className="text-xs font-medium text-gray-600">Supported files: JPG, JPEG, PNG, SVG</p>
            </div> */}

            <UploadElement sendFileToParent={handleFileUpload} />
            {/* <UploadElement /> */}
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

            <PriceManager />
            {/* Next button */}
            <hr className="bg-[grey] my-[1.5rem] w-full h-[.1rem]" />
            <ButtonElement
                clickEvent={handleSubmit}
                isLoading={isLoading}
                label={setSubmitLabel ? submitLabel : "Next"}
                customStyle="max-w-fit px-20 text-white font-semibold bg-primary-green"
            />
        </div>
    </div>
}

export default Onboarding;