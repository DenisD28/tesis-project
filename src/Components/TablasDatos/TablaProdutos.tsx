import "../../css/App.css"
import { useEffect, useState } from "react"
import { listProduct } from "../types.d"
import { listaInventario } from "../../services/Services"
import { HeadType } from "../Table/types/HeadType"
import { Table } from "../Table/Table"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { useNavigate } from "react-router-dom"

const headers: HeadType[] = [
    { name: "Codigo", prop: "id" },
    { name: "Nombre", prop: "product" },
    { name: "Stock", prop: "stock" },
]

const titleTable = 'Productos'

export const TablasProductos: React.FC = () => {

    //**********************************Consulta a base de datos******************************************
    const [data, setProduct] = useState<listProduct>([])
    let state = { links: [], meta: [], inventario: [] }
    const navigation = useNavigate()

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    //**********************************Consulta a base de datos******************************************


    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="button">
                    <ButtonForm dataButton={{
                        'title': 'Ingresar',
                        'color': 'green',
                        'type': 'submit',
                    }} />
                </div>
            </form>
            <Table
                headers={headers}
                data={data}
                titleTable={titleTable}
            />
        </>
    )
}