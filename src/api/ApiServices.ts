import axios, {AxiosInstance} from "axios";
import { getDecryptedToken } from "../services/Token/getDecryptedToken.ts";

class ApiServices {
    private static instance: ApiServices;
    private request: AxiosInstance;

    constructor() {
        this.request = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getDecryptedToken()}`
            },
        });
    }

    public static getInstance() {
        if (!ApiServices.instance) {
            ApiServices.instance = new ApiServices();
        }
        return ApiServices.instance;
    }

    public setToken() {
        this.request.defaults.headers['Authorization'] = `Bearer ${getDecryptedToken()}`;
    }

    public get<T>(url: string, params: any = {}) {
        return new Promise((resolve, reject) => {
            this.request.get<T>(url, { params })
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

    public post<T>(url: string, data?: any) {
        return new Promise((resolve, reject) => {
            this.request.post<T>(url, data)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

    public put<T>(url: string, data: any) {
        return new Promise((resolve, reject) => {
            this.request.put<T>(url, data)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

    public delete<T>(url: string, data?: any) {
        return new Promise((resolve, reject) => {
            this.request.delete<T>(url, data)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

    public patch<T>(url: string, data: any) {
        return new Promise((resolve, reject) => {
            this.request.patch<T>(url, data)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

    public downloadFile(url: string, data: any, filename: string, method: string = 'post') {
        return new Promise((resolve, reject) => {
            this.request.request({
                url,
                method,
                responseType: 'blob',
                data,
            })
                .then(res => {
                    const url = window.URL.createObjectURL(new Blob([res.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', filename);
                    document.body.appendChild(link);
                    link.click();
                    resolve("Downloaded");
                })
                .catch(err => reject(err))
        })

    }
}

const apiServices = ApiServices.getInstance();

export default apiServices;