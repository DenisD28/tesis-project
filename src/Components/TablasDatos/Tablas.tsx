import { useEffect, useState } from "react"
import "../../css/App.css"
import listaInventario from "../../services/Services"
import { inventario, listProduct } from "../types.d"

export const Tablas: React.FC = () => {

    const [product, setProduct] = useState<listProduct>([])

    useEffect(() => {
        const lista = async () => {
            try {
                const inven = await listaInventario.listaInventario()
                setProduct(inven)
            } catch (e) {
                console.log(e)
            }
        }

        console.log(product)
        lista()
    }, [])
    return (
        <div className="body contenedor">
            <h2 className="titulo">Lista de Organizaciones</h2>
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
                            {
                                product.map(pro => (
                                    <tr key={pro.product_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">{pro.product_id}</td>
                                        <td className="px-6 py-4">{pro.type}</td>
                                        <td className="px-6 py-4">{pro.unit_of_measurement}</td>
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