import SectionComponent from "../../Components/Section/SectionComponent.tsx";
import {useEffect, useState} from "react";
import {HeadType} from "../../Components/Table/types/HeadType.ts";
import {TablaProveedores} from "../../services/Provider/ListaProveedoresServices.ts";
import ShowInfoComponent from "../../Components/Section/ShowInfo/ShowInfoComponent.tsx";
import {VerMasProveedores} from "../../Components/VerMas/VerMasProveedores.tsx";

export const Proveedores = () => {
    const [data, setOrg] = useState<[]>([])
    const [datos, setDatos] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const headers: HeadType[] = [
        { name: "Nombre", prop: "name" },
        { name: "Telefono", prop: "phone_main" },
        { name: "Ruc", prop: "ruc" },
    ]

    useEffect(() => {
        lista()
    }, [currentPage])

    const lista = async () => {
        try {
            setLoading(true)
            const { meta, proveedores } = await TablaProveedores(currentPage)
            setOrg(proveedores)
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
                    <VerMasProveedores data={datos} setIsOpen={setIsOpen} />
                )
            }
            <SectionComponent
                title="Proveedores"
                url="/addproveedores"
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