import { descargarReporte, descargarReporteCompras, descargarReporteInventario, descargarReporteVentas } from "../../services/Services"

export const Reports = () => {

    const handleSubmit = async () => {
        try {
            const response = await descargarReporte()

        } catch (error: any) {
        }
    }

    const ReporteInventario = async () => {
        try {
            const response = await descargarReporteInventario()

        } catch (error: any) {
        }
    }

    const ReporteCompras = async () => {
        try {
            const response = await descargarReporteCompras()

        } catch (error: any) {
        }
    }

    const ReporteVentas = async () => {
        try {
            const response = await descargarReporteVentas()

        } catch (error: any) {
        }
    }

    return (<>
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Reporte Inventario</h3>
                    <p className="my-4"></p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div className="flex justify-center items-center flex-col p-2 mt-4">
                            <button onClick={ReporteInventario} className={`w-full h-14 rounded-md border-2 border-[#ddd] px-4 font-medium bg-blue-600 text-white`} type="button">Descargar</button>
                        </div>
                    </div>
                </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Reporte de Compras</h3>
                    <p className="my-4"></p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div className="flex justify-center items-center flex-col p-2 mt-4">
                            <button onClick={handleSubmit} className={`w-full h-14 rounded-md border-2 border-[#ddd] px-4 font-medium bg-blue-600 text-white`} type="button">Descargar</button>
                        </div>
                    </div>
                </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Reporte de Ventas</h3>
                    <p className="my-4"></p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div className="flex justify-center items-center flex-col p-2 mt-4">
                            <button onClick={handleSubmit} className={`w-full h-14 rounded-md border-2 border-[#ddd] px-4 font-medium bg-blue-600 text-white`} type="button">Descargar</button>
                        </div>
                    </div>
                </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Exportar Base de Datos</h3>
                    <p className="my-4"></p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div className="flex justify-center items-center flex-col p-2 mt-4">
                            <button onClick={handleSubmit} className={`w-full h-14 rounded-md border-2 border-[#ddd] px-4 font-medium bg-blue-600 text-white`} type="button">Descargar</button>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    </>)
}