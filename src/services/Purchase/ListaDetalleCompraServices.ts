import axios from "axios";
import { getDecryptedToken } from "../Token/getDecryptedToken";

export const listaDetalleCompra = async (id: number) => {
    const maxRetries: number = 1;
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}details_purchase?product_id=${id}`;

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    };

    let retries = 0;

    while (retries < maxRetries) {
        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error: any) {
            if (error.response && error.response.status === 429) {
                const backoffTime = Math.pow(2, retries) * 1000; // Backoff exponencial
                console.log(`Rate limited. Retrying in ${backoffTime / 6000} seconds.`);
                await new Promise(resolve => setTimeout(resolve, backoffTime));
                retries++;
            } else {
                // Manejar otros errores de manera diferente o al menos registrarlos
                console.error(`Error: ${error.message}`);
                break;  // Romper el bucle para evitar reintentos infinitos en otros errores
            }
        }
    }

    // Puedes devolver un valor predeterminado o lanzar una excepción según tus necesidades.
    return null;
};