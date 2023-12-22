import ReportsModal from "../../Components/Modal/Reports/ReportsModal"
import { useState } from "react"
import { DownloadSQL } from "../../services/Reportes/BackupServices"
import { Toaster } from "react-hot-toast";

export const Reports = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [typeProduct, setTypeProduct] = useState<string>("");
    const [selectProduct, setSelectProduct] = useState<boolean>(true);
    const [typeReport, setTypeReport] = useState<string>("");

    const listReport = [
        {
            name: 'Inventario de materia prima - Excel',
            onclick: () => { setTypeProduct('MP'); setTypeReport("InventarioMP"); setSelectProduct(true); setIsOpen(true); }
        },
        {
            name: 'Inventario de producto terminado - Excel',
            onclick: () => { setTypeProduct('PT'); setTypeReport("InventarioPT"); setSelectProduct(true); setIsOpen(true); }
        },
        {
            name: 'Compras - Excel',
            onclick: () => { setIsOpen(true); setTypeProduct('MP'); setTypeReport("Compras"); setSelectProduct(true) }
        },
        {
            name: 'Ventas - Excel',
            onclick: () => { setIsOpen(true); setTypeProduct('PT'); setTypeReport("Ventas"); setSelectProduct(true) }
        },
        {
            name: 'Producto menos vendido - Excel',
            onclick: () => { setIsOpen(true); setTypeProduct(""); setTypeReport("MenosVendido"); setSelectProduct(false) }
        },
        {
            name: 'Producto mas vendido - Excel',
            onclick: () => { setIsOpen(true); setTypeProduct(""); setTypeReport("MasVendido"); setSelectProduct(false) },
            type: 'none'
        },
        {
            name: 'exportar base de datos - SQL',
            onclick: async () => { await DownloadSQL() }
        }
    ]

    return (
        <main>
            <h1 className=' text-purple-icons font-bold text-2xl mb-8'>Reportes</h1>
            <div className="w-full max-w-[80rem] flex flex-col justify-center items-start">
                <section className="w-full h-14 bg-purple-icons rounded-t-md text-white flex justify-between pl-4 pr-8 items-center font-bold">
                    <h1>Tipos de reporte</h1>
                    <h1>Acciones</h1>
                </section>
                {
                    listReport.map((report, index) => (
                        <section key={index} className="w-full flex justify-between items-center pl-4 pr-2 h-14 border-2 font-medium">
                            <h2>{report.name}</h2>
                            <button onClick={report.onclick} className="w-auto h-10 bg-purple-icons rounded-md text-white flex justify-between px-4 items-center font-semibold">
                                <h1>Descargar</h1>
                            </button>
                        </section>
                    ))
                }
            </div>
            {
                isOpen && <ReportsModal isOpen={isOpen} onClose={() => setIsOpen(false)} typeProduct={typeProduct} selelectProduct={selectProduct} typeReport={typeReport} />
            }
            <Toaster />
        </main>
    )
}