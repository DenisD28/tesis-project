import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { TablaOrganizacion } from "../../services/Organization/ListaOrganizacionServices"
import { HeadType } from "../Table/types/HeadType"
import { useNavigate } from "react-router-dom"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { Pagination } from 'flowbite-react'
import { Table } from "../Table/Table"
import { VerMasOrganizaciones } from "../VerMas/VerMasOrganizaciones"

const headers: HeadType[] = [
    { name: "Ruc", prop: "ruc" },
    { name: "Nombre", prop: "name" },
    { name: "Telefono", prop: "phone_main" },
]

const titleTable = 'Organizaciones'

export const TablasOrganizaciones: React.FC = () => {

    const [data, setOrg] = useState()
    const [datos, setDatos] = useState()

    const navigation = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        lista();
    }, [currentPage])

    const lista = async () => {
        try {
            // const { links, meta, organizaciones } = await listaOrganizaciones()
            const { meta, organizaciones } = await TablaOrganizacion(currentPage)

            setOrg(organizaciones)
            setTotalPages(meta.last_page)
        } catch (e) {
            // console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigation("/addorganizacion")
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
                    <VerMasOrganizaciones data={datos} setIsOpen={setIsOpen} />
                )
            }
            <Table
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

