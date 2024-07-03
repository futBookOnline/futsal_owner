import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import ButtonElement from "./ButtonElement";

const ModalElement = ({
    openModalText,
    openModalIcon,
    title,
    children,
    showActionButton = false,
    actionButtonText,
    isModalOpen,
    isButtonIconOnly = false,
    buttonIconClass,
    buttonStyle,
    toggleModal
}) => {
    // const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [isOpen, setIsOpen] = useState(isModalOpen);

    useEffect(() => {
        setIsOpen(isModalOpen);
    }, [isModalOpen]);

    const closeModal = () => setIsOpen(false)


    return (
        <>
            {/* <Button onPress={onOpen} isIconOnly={isButtonIconOnly} className={buttonStyle}>
                {buttonIconClass && <FontAwesomeIcon icon={buttonIconClass} />}
                {openModalText && openModalText}
            </Button> */}
            <Modal isOpen={isOpen} onClose={toggleModal}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                        <ModalBody>{children}</ModalBody>
                        <ModalFooter>
                            <ButtonElement color="danger" label="Close" variant="light" clickEvent={toggleModal} />
                            {showActionButton && (
                                <ButtonElement color="primary">
                                    {actionButtonText}
                                </ButtonElement>
                            )}
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalElement;