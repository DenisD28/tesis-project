import { DetailsSale } from "../../../types/SaleTypes/DetailsSale";

export interface InfoSaleProps {
    fnClick: () => void,
    Data: DetailsSale[],
    fnDeleteDetailsSale: (data: DetailsSale) => void,
}