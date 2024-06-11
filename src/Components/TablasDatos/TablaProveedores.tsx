import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { TablaProveedores } from "../../services/Provider/ListaProveedoresServices"
import { HeadType } from "../Table/types/HeadType"
import { VerMasProveedores } from "../VerMas/VerMasProveedores"
import { Tablev2 } from "../Tablev2/Tablev2"
import PaginationComponent from "../Pagination/PaginationComponent.tsx";

const headers: HeadType[] = [
    { name: "Nombre", prop: "name" },
    { name: "Telefono", prop: "phone_main" },
    { name: "Ruc", prop: "ruc" },
]

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
            const { meta, proveedores } = await TablaProveedores(currentPage)

            setOrg(proveedores)
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
                    <VerMasProveedores data={datos} setIsOpen={setIsOpen} />
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

