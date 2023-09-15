import "../../css/App.css"
import { listOrg } from "../types.d"
import { useEffect, useState } from "react"
import { listaOrganizaciones } from "../../services/Services"

export const TablasOrganizaciones: React.FC = () => {

    const [listOrg, setOrg] = useState<listOrg>([])
    const [next, setNext] = useState("")
    let state = { links: [], meta: [], organizaciones: [] }

    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            const { links, meta, organizaciones } = await listaOrganizaciones()
            state = ({
                links,
                meta,
                organizaciones
            })
            setOrg(organizaciones)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="container">
                <div>
                    <h2 className="titulo">Lista de Productos Terminados</h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nombre
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        RUC
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Direccion
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Telefono
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listOrg.map(pro => (
                                        <tr key={pro.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <tr key={pro.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4">{pro.name}</td>
                                                <td className="px-6 py-4">{pro.ruc}</td>
                                                <td className="px-6 py-4">{pro.address}</td>
                                                <td className="px-6 py-4">{pro.phone_main}</td>
                                                {/* <td>
                                                    <button onClick={() => agregar(pro.id, pro.product)}>Agregar</button>
                                                </td> */}
                                            </tr>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

