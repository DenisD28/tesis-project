import { DetailsSale } from "../../../types/SaleTypes/DetailsSale";

export interface InfoProdProps {
    fnClick: () => void,
    Data: DetailsSale[],
    fnDeleteDetailsSale: (data: DetailsSale) => void,
    DataPurcharse: purchase[]
}