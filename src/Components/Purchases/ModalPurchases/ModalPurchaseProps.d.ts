import { dataProduct } from "../../../Interfaces/Interfaces";

export interface ModalPurchasesProps {
    isModalOpen: boolean,
    toggleModal: () => void,
    handleSubmition: (data: dataProduct) => void,
}