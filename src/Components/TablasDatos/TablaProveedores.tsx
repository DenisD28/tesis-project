import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { TablaProveedores } from "../../services/Provider/ListaProveedoresServices"
import { HeadType } from "../Table/types/HeadType"
import { Pagination } from 'flowbite-react'
import { VerMasProveedores } from "../VerMas/VerMasProveedores"
import { Tablev2 } from "../Tablev2/Tablev2"

const headers: HeadType[] = [
    { name: "Nombre", prop: "name" },
    { name: "Telefono", prop: "phone_main" },
    { name: "Ruc", prop: "ruc" },
]

function pages(url: string) {
    let lastDigit = ""
    // Utiliza una expresión regular para encontrar el último dígito en la URL
    const matches = url.match(/\d+$/);

    if (matches && matches.length > 0) {
        // El último dígito se encuentra en matches[0]
        lastDigit = matches[0];
    } else {
        //console.log("No se encontraron dígitos en la URL.");
    }

    return lastDigit
}

export const TablasProveedores: React.FC = () => {

    const [data, setOrg] = useState()
    const [isOpen, setIsOpen] = useState(false);
    const [datos, setDatos] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        lista();
    }, [currentPage])

    const lista = async () => {
        try {
            // const { links, meta, proveedores } = await listaProveedores()
            const { links, proveedores } = await TablaProveedores(currentPage)

            setOrg(proveedores)
            setTotalPages(parseInt(pages(links.last), 10))
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
                    <VerMasProveedores data={datos} setIsOpen={setIsOpen} />
                )
            }
            <Tablev2
                headers={headers}
                data={data}
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

