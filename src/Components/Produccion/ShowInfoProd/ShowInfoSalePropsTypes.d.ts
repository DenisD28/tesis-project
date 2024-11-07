import { DetailsPurcharse } from "../../../types/SaleTypes/DetailsPurcharse";
import { DetailsSale } from "../../../types/SaleTypes/DetailsSale";

export interface ShowInfoSaleProps {
    Data: purchase,
    fnDeleteDetailsSale: (data: DetailsPurcharse) => void,
}