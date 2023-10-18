import { DetailsSale } from "../../../Types/DetailsSale";

export interface ModalSaleProps {
    isModalOpen: boolean
    toggleModal: () => void,
    fnAddDetailsSale: (data: DetailsSale) => void,
}