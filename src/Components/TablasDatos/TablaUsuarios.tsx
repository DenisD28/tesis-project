import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { listaUsuarios, listaUsuariosOrganizacion } from "../../services/Services"
import { HeadType } from "../Table/types/HeadType"
import { useNavigate } from "react-router-dom"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { Table } from "../Table/Table"
import { Pagination } from "flowbite-react"
import { VerMasUsuarios } from "../VerMas/VerMasUsuarios"
import { useGlobalContext } from "../../hooks/useUserContext"


const headers: HeadType[] = [
    { name: "Nombre", prop: "name" },
    { name: "Estado", prop: "status" },
    { name: "Rol", prop: "role" },
    { name: "Ultima Conexion", prop: "last_login_at" },
]

function pages(url: string) {
    let lastDigit = ""
    // Utiliza una expresión regular para encontrar el último dígito en la URL
    const matches = url.match(/\d+$/);

    if (matches && matches.length > 0) {
        // El último dígito se encuentra en matches[0]
        lastDigit = matches[0];
    } else {
        // console.log("No se encontraron dígitos en la URL.");
    }

    return lastDigit
}

const titleTable = 'Usuarios del Sistema'

export const TablasUsuarios: React.FC = () => {

    const [data, setOrg] = useState()
    const navigation = useNavigate()
    const [datos, setDatos] = useState()
    const [isOpen, setIsOpen] = useState(false);
    const { usuario } = useGlobalContext()

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        lista()
    }, [])

    const onPageChange = (page: number) => {
        setCurrentPage(page)
        lista()
    };

    const [totalPages, setTotalPages] = useState(1)

    const lista = async () => {
        try {

            // const { links, meta, usuarios } = await listaUsuarios()
            if (usuario?.role.id === 1) {
                const { links, usuarios } = await listaUsuarios(currentPage)
                setOrg(usuarios)
                setTotalPages(parseInt(pages(links.last), 10))
            } else if (usuario?.role.id === 2) {
                const { links, usuarios } = await listaUsuariosOrganizacion(usuario?.organization.id, currentPage)
                setOrg(usuarios)
                setTotalPages(parseInt(pages(links.last), 10))
            }

        } catch (e) {
            // console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigation("/addusuarios")
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
                    <VerMasUsuarios data={datos} setIsOpen={setIsOpen} />
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

