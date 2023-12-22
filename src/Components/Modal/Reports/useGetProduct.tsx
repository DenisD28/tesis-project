import { useEffect, useState } from 'react'
import { getProducts } from '../../../services/Reportes/GetProductServices'
import { DownloadReport } from '../../../services/Reportes/ReportServices'


interface ProductType {
    "id_inventory": number,
    "id_product": number,
    "name_product": string
}

export default function useGetProduct(typeProduct: string) {
    const dateNow = new Date();
    const dateNowString = dateNow.toISOString().split("T")[0];
    const [fromDate, setFromDate] = useState<string>(dateNowString);
    const [toDate, setToDate] = useState<string>(dateNowString);
    const [withProduct, setWithProduct] = useState<boolean>(false);
    const [listProduct, setListProduct] = useState<ProductType[]>([]);
    const [product, setProduct] = useState("");

    const listReport = [
        {
            type: "MasVendido",
            name: 'Productos más vendidos',
            endpoint: 'BestSeller',
        },
        {
            type: "MenosVendido",
            name: 'Productos menos vendidos',
            endpoint: 'Low',
        },
        {
            type: "Ventas",
            name: 'Ventas',
            endpoint: 'Sales',
        },
        {
            type: "Compras",
            name: 'Compras',
            endpoint: 'Purchase',
        },
        {
            type: "InventarioPT",
            name: 'Inventario de producto terminado',
            endpoint: 'PT',
        },
        {
            type: "InventarioMP",
            name: 'Inventario de materia prima',
            endpoint: 'MP',
        },
    ];

    let getProduct = async () => {
        try {
            const { inventario } = await getProducts(typeProduct);
            setListProduct(inventario);
        } catch (error: any) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (!withProduct) {
            if (typeProduct === "MP" || typeProduct === "PT") {
                getProduct();
            }
        }
    }, [withProduct])

    let DescargarReporte = async (endpoint: string, nameFile: string, product: string) => {
        await DownloadReport(endpoint, nameFile, fromDate, toDate, product)
    }

    let touchButton = (typeReport: string) => {
        listReport.forEach((report) => {
            if (report.type === typeReport) {
                DescargarReporte(report.endpoint, report.name, withProduct ? product : "")
            }
        })
    }

    return {
        fromDate,
        toDate,
        setFromDate,
        setToDate,
        withProduct,
        setWithProduct,
        listProduct,
        setProduct,
        touchButton,
    }
}
