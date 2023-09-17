import "../../css/App.css"
import { useEffect, useState } from "react"
import { listProduct } from "../types.d"
import { listaInventario } from "../../services/Services"
import { HeadType } from "../Table/types/HeadType"
import { Table } from "../Table/Table"

const headers: HeadType[] = [
    { name: "Codigo", prop: "codigo" },
    { name: "Nombre", prop: "nombre" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Materia Prima'

export const Tablas: React.FC = () => {

    //**********************************Consulta a base de datos******************************************
    const [data, setProduct] = useState<listProduct>([])
    let state = { links: [], meta: [], inventario: [] }

    useEffect(() => {
        const lista = async () => {
            try {
                const { links, meta, inventario } = await listaInventario()
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

    //**********************************Consulta a base de datos******************************************


    return (
        <>
            <Table
                headers={headers}
                data={data}
                titleTable={titleTable}
            />
        </>
    )
}