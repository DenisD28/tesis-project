import { InputSale } from "../../../../Types/Types";

export interface BoxModalSaleProps {
    isSelected: boolean,
    fnOnSelect?: (data: InputSale) => void,
    Data: InputSale,
}