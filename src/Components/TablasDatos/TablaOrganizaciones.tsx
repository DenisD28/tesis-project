import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { TablaOrganizacion } from "../../services/Services"
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

function pages(url: string) {
    let lastDigit = ""
    // Utiliza una expresión regular para encontrar el último dígito en la URL
    const matches = url.match(/\d+$/);

    if (matches && matches.length > 0) {
        // El último dígito se encuentra en matches[0]
        lastDigit = matches[0];
        //console.log("Último dígito:", lastDigit);
    } else {
        // console.log("No se encontraron dígitos en la URL.");
    }

    return lastDigit
}

export const TablasOrganizaciones: React.FC = () => {

    const [data, setOrg] = useState()
    const navigation = useNavigate()
    const [datos, setDatos] = useState()
    const [isOpen, setIsOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => {
        setCurrentPage(page)
        lista()
    };

    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            // const { links, meta, organizaciones } = await listaOrganizaciones()
            const { links, organizaciones } = await TablaOrganizacion(currentPage)

            setOrg(organizaciones)
            console.log(links)
            setTotalPages(parseInt(pages(links.last), 10))
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
                onPageChange={onPageChange}
                showIcons
            />
        </>
    )
}

