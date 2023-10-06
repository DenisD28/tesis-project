import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";
import { dataProduct } from "../../types/ProductTypes/dataProduct";
import { RegisterPurchaseProps } from "../../types/PurchaseTypes/RegisterPurchaseProps";

export const RegisterPurchase = async (data: RegisterPurchaseProps) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}purchase?number_bill=${data.numberBill}&provider_id=${data.provider_id}`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }
    const body = data.products.map((product: dataProduct) => {
        return {
            product_id: product.id,
            quantity: product.quantity,
            price: product.unit_price,
            observation: product.observation,
        }
    })

    const response = await axios.post(url, body, {
        headers: headers
    })
    console.log(response.data)

    return response.data
}