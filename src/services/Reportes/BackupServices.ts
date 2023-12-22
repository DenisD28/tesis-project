import { getDecryptedToken } from "../Token/getDecryptedToken";

export const DownloadSQL = async () => {
    const token = getDecryptedToken();
    const url = `${import.meta.env.VITE_API_URL}export/sql`

    const headers = {
        'Authorization': `Bearer ${token}`,
    }

    fetch(url, { headers })
        .then(response => {
            if (response.ok) {
                return response.blob();
            } else {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
        })
        .then(blobData => {
            const url = window.URL.createObjectURL(blobData);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'BaseDatos.sql';
            a.style.display = 'none';

            document.body.appendChild(a);
            a.click();

            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error(error);
        });
}