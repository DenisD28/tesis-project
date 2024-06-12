import SectionComponent from "../../Components/Section/SectionComponent.tsx";
import {useEffect, useState} from "react";
import {HeadType} from "../../Components/Table/types/HeadType.ts";
import {listaCliente} from "../../services/Clients/ListaClientesServices.ts";
import ShowInfoComponent from "../../Components/Section/ShowInfo/ShowInfoComponent.tsx";
import {VerMasCliente} from "../../Components/VerMas/VerMasCliente.tsx";

export const Clientes = () => {
    const [data, setOrg] = useState<[]>([])
    const [datos, setDatos] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const headers: HeadType[] = [
        { name: "Nombre", prop: "name" },
        { name: "Municipio", prop: "municipality_id" },
    ]

    useEffect(() => {
        lista()
    }, [currentPage])

    const lista = async () => {
        try {
            setLoading(true)
            const { meta, clients } = await listaCliente(currentPage)
            setOrg(clients)
            setTotalPages(meta.last_page)
            setLoading(false)
        } catch (e) {
            // console.log(e)
        }
    }

    return (
        <>
            {
                isOpen && (
                    <VerMasCliente data={datos} setIsOpen={setIsOpen} />
                )
            }
            <SectionComponent
                title="Clientes"
                url="/addcliente"
            >
                <ShowInfoComponent
                    headers={headers}
                    data={data}
                    setData={setDatos}
                    setIsOpen={setIsOpen}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    loading={loading}
                    setCurrentPage={setCurrentPage}
                />
            </SectionComponent>
        </>
    )
}