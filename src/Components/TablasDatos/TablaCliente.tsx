import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { listaCliente } from "../../services/Clients/ListaClientesServices"
import { HeadType } from "../Table/types/HeadType"
import { useNavigate } from "react-router-dom"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { Pagination } from "flowbite-react"
import { VerMasCliente } from "../VerMas/VerMasCliente"
import { Tablev2 } from "../Tablev2/Tablev2"

const headers: HeadType[] = [
    { name: "Nombre", prop: "name" },
    { name: "Municipio", prop: "municipality_id" },
]

const titleTable = 'Clientes'

export const TablasCliente: React.FC = () => {

    const [data, setOrg] = useState()
    const navigation = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [datos, setDatos] = useState()

    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        lista()
    }, [currentPage])

    const lista = async () => {
        try {
            // const { links, meta, clients } = await listaCliente()
            const { meta, clients } = await listaCliente(currentPage)

            setOrg(clients)
            setTotalPages(meta.last_page)
        } catch (e) {
            // console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigation("/addcliente")
    }

    const vermas = (dat: SetStateAction<undefined>) => {
        setDatos(dat)
        setIsOpen(true)
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
            {
                isOpen && (
                    <VerMasCliente data={datos} setIsOpen={setIsOpen} />
                )
            }
            <Tablev2
                headers={headers}
                data={data}
                titleTable={titleTable}
                fnClick={vermas}
            />
            <Pagination
                layout="navigation"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                showIcons
            />
        </>
    )
}

