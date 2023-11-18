import "../../css/App.css"
import { useEffect, useState } from "react"
import { TablaProveedores } from "../../services/Services"
import { HeadType } from "../Table/types/HeadType"
import { useNavigate } from "react-router-dom"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { Table } from "../Table/Table"
import { Pagination } from 'flowbite-react'

const headers: HeadType[] = [
    { name: "Nombre", prop: "name" },
    { name: "Telefono", prop: "phone_main" },
    { name: "Ruc", prop: "ruc" },
]

const titleTable = 'Proveedores'

function pages(url: string) {
    let lastDigit = ""
    // Utiliza una expresión regular para encontrar el último dígito en la URL
    const matches = url.match(/\d+$/);

    if (matches && matches.length > 0) {
        // El último dígito se encuentra en matches[0]
        lastDigit = matches[0];
        console.log("Último dígito:", lastDigit);
    } else {
        console.log("No se encontraron dígitos en la URL.");
    }

    return lastDigit
}

export const TablasProveedores: React.FC = () => {

    const [data, setOrg] = useState()
    const navigation = useNavigate()

    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => {
        setCurrentPage(page)
        console.log(page)
        lista()
    };

    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            // const { links, meta, proveedores } = await listaProveedores()
            const { links, proveedores } = await TablaProveedores(currentPage)

            setOrg(proveedores)
            setTotalPages(parseInt(pages(links.last), 10))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigation("/addproveedores")
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

