import { DetailsSale } from "../../../Types/DetailsSale";
import { purchase } from "../../types.d";

export interface ModalSaleProps {
    isModalOpen: boolean
    toggleModal: () => void,
    fnAddDetailsSale: (data: DetailsSale) => void,
    DataPurcharse: purchase[],
    setDetalle: React.Dispatch<React.SetStateAction<purchase[]>>
}