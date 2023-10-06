import { dataProduct } from "../ProductTypes/dataProduct";
import { ProductsForInventory } from "../ProductTypes/ProductsForInventory";

export interface useAddProductsPurchaseProps {
    handleSubmition: (handleSubmition: dataProduct) => void,
    ListProduct: ProductsForInventory[],
    toggleModal: () => void,
}