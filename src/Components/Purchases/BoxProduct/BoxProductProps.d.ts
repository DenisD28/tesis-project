import { dataProduct } from "../../../Interfaces/Purchases/Purchases";

export interface BoxProductProps {
    data: dataProduct,
    fnDelete: (id: number) => void,
}