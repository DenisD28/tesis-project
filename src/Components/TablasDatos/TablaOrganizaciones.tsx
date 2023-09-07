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
        <div className="body contenedor">
            <h2 className="titulo">Lista de Organizaciones</h2>
            <div className="tabla">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ruc
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Telefono
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Direccion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listOrg.map(pro => (
                                    <tr key={pro.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">{pro.id}</td>
                                        <td className="px-6 py-4">{pro.name}</td>
                                        <td className="px-6 py-4">{pro.phone_main}</td>
                                        <td className="px-6 py-4">{pro.address}</td>
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

