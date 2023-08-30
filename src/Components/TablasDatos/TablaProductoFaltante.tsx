import { useEffect, useState } from "react"
import "../../css/App.css"
import listaInventario, { listaProductoFaltante } from "../../services/Services"
import { listProduct } from "../types.d"

export const TablaProductoFaltante: React.FC = () => {

    const [product, setProduct] = useState<listProduct>([])
    let state = { links: [], meta: [], inventario: [] }

    useEffect(() => {
        const lista = async () => {
            try {
                const { links, meta, inventario } = await listaProductoFaltante()
                state = ({
                    links,
                    meta,
                    inventario
                })
                setProduct(inventario)
            } catch (e) {
                console.log(e)
            }
        }

        lista()
    }, [])

    return (
        <div className="body contenedor">
            <h2 className="titulo">Dashboard</h2>
            <div className="tabla">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Codigo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Stock
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Disponibilidad
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map(pro => (
                                    <tr key={pro.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">{pro.code}</td>
                                        <td className="px-6 py-4">{pro.product}</td>
                                        <td className="px-6 py-4">{pro.stock}</td>
                                        <td className="px-6 py-4">{pro.status}</td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}