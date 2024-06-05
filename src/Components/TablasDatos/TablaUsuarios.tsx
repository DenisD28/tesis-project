import "../../css/App.css"
import { SetStateAction, useEffect, useState } from "react"
import { listaUsuarios } from "../../services/Users/ListaUsuariosServices"
import { listaUsuariosOrganizacion } from "../../services/Users/ListaUsuariosXOrganizacionServices"
import { HeadType } from "../Table/types/HeadType"
import { useNavigate } from "react-router-dom"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { Pagination } from "flowbite-react"
import { VerMasUsuarios } from "../VerMas/VerMasUsuarios"
import { useGlobalContext } from "../../hooks/useUserContext"
import { Tablev2 } from "../Tablev2/Tablev2"


const headers: HeadType[] = [
    { name: "Nombre", prop: "name" },
    { name: "Estado", prop: "status" },
    { name: "Rol", prop: "role" },
    { name: "Ultima Conexion", prop: "last_login_at" },
]

const titleTable = 'Usuarios del Sistema'

export const TablasUsuarios: React.FC = () => {

    const [data, setOrg] = useState()
    const navigation = useNavigate()
    const [datos, setDatos] = useState()
    const [isOpen, setIsOpen] = useState(false);
    const { usuario } = useGlobalContext()

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        lista();
    }, [currentPage])


    const lista = async () => {
        try {
            if (usuario?.role.id === 1) {
                const { meta, usuarios } = await listaUsuarios(currentPage)
                setOrg(usuarios)
                setTotalPages(meta.last_page)
            } else if (usuario?.role.id === 2) {
                const { meta, usuarios } = await listaUsuariosOrganizacion(currentPage)
                setOrg(usuarios)
                setTotalPages(meta.last_page)
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

