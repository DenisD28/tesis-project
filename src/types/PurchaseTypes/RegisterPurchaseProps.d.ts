import { dataProduct } from "../ProductTypes/dataProduct"

export interface RegisterPurchaseProps {
    numberBill: string,
    provider_id: number,
    products: dataProduct[]
}