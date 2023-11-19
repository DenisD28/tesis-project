import "../../css/App.css"
import { useEffect, useState } from "react"
import { listaCliente } from "../../services/Services"
import { HeadType } from "../Table/types/HeadType"
import { useNavigate } from "react-router-dom"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { Table } from "../Table/Table"

const headers: HeadType[] = [
    { name: "Nombre", prop: "name" },
    { name: "Municipio", prop: "municipality_id" },
    { name: "Acciones", prop: "acciones" }
]

const titleTable = 'Clientes'

export const TablasCliente: React.FC = () => {

    const [data, setOrg] = useState()
    // const [next, setNext] = useState("")
    const navigation = useNavigate()

    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            // const { links, meta, clients } = await listaCliente()
            const { clients } = await listaCliente()

            setOrg(clients)
        } catch (e) {
            // console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigation("/addcliente")
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="button">
                    <ButtonForm dataButton={{
                        'title': 'Ingresar',
                        'color': 'green',
                        'type': 'submit',
                        'fnClick': () => { }
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

