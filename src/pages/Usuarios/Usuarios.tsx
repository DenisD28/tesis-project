import SectionComponent from "../../Components/Section/SectionComponent.tsx";
import {HeadType} from "../../Components/Table/types/HeadType.ts";
import {useEffect, useState} from "react";
import {listaUsuarios} from "../../services/Users/ListaUsuariosServices.ts";
import {listaUsuariosOrganizacion} from "../../services/Users/ListaUsuariosXOrganizacionServices.ts";
import {useGlobalContext} from "../../hooks/useUserContext.tsx";
import ShowInfoComponent from "../../Components/Section/ShowInfo/ShowInfoComponent.tsx";
import {VerMasUsuarios} from "../../Components/VerMas/VerMasUsuarios.tsx";

export const Usuarios = () => {
    const [data, setOrg] = useState<[]>([])
    const [datos, setDatos] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const { usuario } = useGlobalContext()

    const headers: HeadType[] = [
        { name: "Nombre", prop: "name" },
        { name: "Estado", prop: "status" },
        { name: "Rol", prop: "role" },
        { name: "Ultima Conexion", prop: "last_login_at" },
    ]

    useEffect(() => {
        lista()
    }, [currentPage])

    const lista = async () => {
        try {
            setLoading(true)
            if (usuario?.role.id === 1) {
                const { meta, usuarios } = await listaUsuarios(currentPage)
                setOrg(usuarios)
                setTotalPages(meta.last_page)
            } else if (usuario?.role.id === 2) {
                const { meta, usuarios } = await listaUsuariosOrganizacion(currentPage)
                setOrg(usuarios)
                setTotalPages(meta.last_page)
            }
            setLoading(false)
        } catch (e) {
            // console.log(e)
        }
    }

    return (
        <>
            {
                isOpen && (
                    <VerMasUsuarios data={datos} setIsOpen={setIsOpen} />
                )
            }
            <SectionComponent
                title="Usuarios"
                url="/addusuarios"
            >
                <ShowInfoComponent
                    headers={headers}
                    data={data}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    loading={loading}
                    setCurrentPage={setCurrentPage}
                    setData={setDatos}
                    setIsOpen={setIsOpen}
                />
            </SectionComponent>
        </>
    )
}