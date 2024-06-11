import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { listaCliente } from "../../services/Clients/ListaClientesServices"
import { HeadType } from "../Table/types/HeadType"
import { VerMasCliente } from "../VerMas/VerMasCliente"
import { Tablev2 } from "../Tablev2/Tablev2"
import PaginationComponent from "../Pagination/PaginationComponent.tsx";

const headers: HeadType[] = [
    { name: "Nombre", prop: "name" },
    { name: "Municipio", prop: "municipality_id" },
]

export const TablasCliente: React.FC = () => {

    const [data, setOrg] = useState()
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

    const vermas = (dat: SetStateAction<undefined>) => {
        setDatos(dat)
        setIsOpen(true)
    }

    return (
        <>
            {
                isOpen && (
                    <VerMasCliente data={datos} setIsOpen={setIsOpen} />
                )
            }
            <Tablev2
                headers={headers}
                data={data}
                fnClick={vermas}
            />
            <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    )
}

