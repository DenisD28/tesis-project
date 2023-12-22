import axios from "axios";
import { DetailsSale } from "../../types/SaleTypes/DetailsSale";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const agregarVenta = async (DetailsSale: DetailsSale[], NumeroFactura: string, Nota: String, Cliente: string, TipoPago: string, PaymentStatus: string) => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}sale?client_id=${Cliente}&number_bill=${NumeroFactura}&note=${Nota}&payment_method=${TipoPago}&payment_status=${PaymentStatus}`

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }

    const body = [{
        'product_input_id': DetailsSale[0].product_input.id,
        'quantity': DetailsSale[0].quantity,
        'price': DetailsSale[0].price
    }]

    const data = JSON.stringify(body)

    const response = await axios.post(url, data, {
        headers: headers
    })

    return response

}