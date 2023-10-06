import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'

export function getDecryptedToken() {
    const encryptedToken = Cookies.get('authToken');
    if (encryptedToken) {
        const bytes = CryptoJS.AES.decrypt(encryptedToken, import.meta.env.VITE_KEY);
        const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedToken;
    }
    return null;
}