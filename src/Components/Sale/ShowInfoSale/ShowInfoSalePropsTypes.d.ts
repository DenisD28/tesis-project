import { DetailsSale } from "../../../types/SaleTypes/DetailsSale";

export interface ShowInfoSaleProps {
    Data: DetailsSale,
    fnDeleteDetailsSale: (data: DetailsSale) => void,
}