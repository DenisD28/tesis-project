import { dataProduct } from "../../../../Interfaces/Purchases/Purchases";

export interface InsertionProductsProps {
    products: dataProduct[]
    toggleModal: () => void
    deleteProduct: (id: number) => void
}