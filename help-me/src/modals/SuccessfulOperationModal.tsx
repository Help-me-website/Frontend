import ModalBase from "./ModalBase";
import Button from "../components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";


type modalType = {
    closeModal: () => void;
    details?: string;
}

export default function SuccessfulOperationModal({closeModal, details = ""}: modalType) {

    return(
        <ModalBase closeModal={closeModal}>
            <div className="w-[80%] max-w-[550px] h-fit bg-white rounded-[15px] flex flex-col p-5 gap-1 justify-center items-center text-lg relative">
                <Icon icon="" className="absolute top-4 right-4 cursor-pointer w-[15px] h-[15px] text-secondary" onClick={() => closeModal()} />
                <img src="/successful.svg" className="w-[50px] h-[50px] mb-2" />
                <p className="font-bold text-secondary unselectable-text" dir="rtl">تمت العملية بنجاح!</p>
                <p className="font-regular text-center text-secondary-shade-3 w-[80%] md:w-[70%] unselectable-text" dir="rtl">{details}</p>
                <span className="w-full flex flex-wrap flex-col md:flex-row-reverse gap-5 items-center justify-center my-3">
                    <Button
                        className="w-[90%]"
                        variation={1}
                        onClick={() => closeModal()}
                    >
                        إغلاق النافذة
                    </Button>
                </span>
            </div>
        </ModalBase>
    );
}