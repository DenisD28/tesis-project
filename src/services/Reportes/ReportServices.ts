import { getDecryptedToken } from "../Token/getDecryptedToken";

export const DownloadReport = async (endpoint: string, nameFile: string, fromDate: string, toDate: string, product: string) => {
    const token = getDecryptedToken();
    const url = import.meta.env.VITE_API_URL + 'complete/export/' + endpoint + '?fromDate="' + fromDate + '"&toDate="' + toDate + '"&product=' + product + '';
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
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
            if (blobData.size > 0) {  // Verifica que el Blob contenga datos
                const url = window.URL.createObjectURL(blobData);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${nameFile}.xlsx`;
                a.style.display = 'none';

                document.body.appendChild(a);
                a.click();

                window.URL.revokeObjectURL(url);
            } else {
                throw new Error('El Blob no contiene datos válidos.');
            }
        })
        .catch(error => {
            console.error(error);
        });

}