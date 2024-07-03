import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";


const UploadElement = (props) => {
    const { icon, heading, subHeading, sendFileToParent } = props;

    const defaultHeading = "Click to add file";
    const defaultSubHeading = "Supported files: pdf, docx, epub";

    const [fileList, setFileList] = useState([]);

    const handleChange = (e) => {
        const files = Object.values(e.target.files);
        setFileList(files);
        sendFileToParent(files)
    };

    const handleFileRemoval = (name) => {
        const list = fileList.filter((item) => item.name !== name);
        setFileList(list);
    };



    return (
        <>
            <div className="border-2 border-dashed flex flex-col items-center rounded-large py-3 cursor-pointer relative">
                <FontAwesomeIcon icon={icon ? icon : ["fas", "cloud-upload-alt"]} />
                <p className="text-md text-gray-600 font-semibold">
                    {heading ? heading : defaultHeading}
                </p>
                <p className="text-xs font-medium text-gray-600">
                    {subHeading ? subHeading : defaultSubHeading}
                </p>
                <input
                    type="file"
                    className="absolute w-full h-full cursor-pointer opacity-0"
                    onChange={handleChange}
                    multiple={true}
                />
            </div>
            <div className="flex items-center gap-2 mt-4">
                <TransitionGroup className="flex gap-2">
                    {fileList.map((el) => (
                        <CSSTransition
                            key={el.name}
                            classNames="fade"
                            timeout={300} // Adjust timeout as needed
                        >
                            <p

                                className="flex gap-2 items-center py-1 px-3 border-[.1rem] border-gray-600 rounded-lg">
                                {el.name}
                                <FontAwesomeIcon
                                    icon={["fas", "times"]}
                                    className="text-danger cursor-pointer"
                                    onClick={() => handleFileRemoval(el.name)}
                                />
                            </p>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </>
    );
};

export default UploadElement;
