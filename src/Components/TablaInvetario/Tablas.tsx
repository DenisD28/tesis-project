import { useEffect, useState } from "react"
import "../../css/App.css"
import listaInventario from "../../services/Services"
import { inventario } from "../types.d"

export const Tablas: React.FC = () => {

    const [product, setProduct] = useState<inventario[]>([])

    useEffect(() => {
        const lista = async () => {
            try {
                const inven = await listaInventario.listaInventario()
                console.log(inven)
            } catch (e) {
                console.log(e)
            }
        }
        lista()
    }, [])
    return (
        <div className="tabla">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tipo
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Stock
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Unidad de medida
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>

        </div>
    )
}