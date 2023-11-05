import "../../css/App.css"
import { listOrg } from "../types.d"
import { useEffect, useState } from "react"
import { listaOrganizaciones } from "../../services/Services"
import { HeadType } from "../Table/types/HeadType"
import Head from "../Table/Head/Head"
import { useNavigate } from "react-router-dom"
import ButtonForm from "../Forms/ButtonComponents/ButtonForm"
import { Pagination } from 'flowbite-react'

const headers: HeadType[] = [
    { name: "Ruc", prop: "ruc" },
    { name: "Nombre", prop: "name" },
    { name: "Telefono", prop: "phone_main" },
    { name: "Acciones", prop: "acciones" }
]

const titleTable = 'Organizaciones'

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

export const TablasOrganizaciones: React.FC = () => {

    const [data, setOrg] = useState<listOrg>([])
    let state = { links: [], meta: [], organizaciones: [] }
    const navigation = useNavigate()

    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => setCurrentPage(page);

    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            console.log(currentPage)
            const { links, meta, organizaciones } = await listaOrganizaciones(currentPage)
            state = ({
                links,
                meta,
                organizaciones
            })
            console.log(links)
            setOrg(organizaciones)
            setTotalPages(parseInt(pages(links.last), 10))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigation("/addorganizacion")
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
            <div className='px-8 rounded-xl bg-white md:h-96 h-80 overflow-y-auto hidden-scroll shadow-lg shadow-[#ddd] border-2'>
                <h1 className='sm:text-2xl text-lg font-bold my-4 h-16 w-full sticky top-0 left-0 bg-white pt-4 text-[#4F46E5]'>{titleTable}</h1>
                <table className='w-full h-full'>
                    <Head headers={headers} />
                    <tbody>
                        {data.map((dat, index) => (
                            <tr
                                key={index}
                                className='border-b-[1px] border-[#eee] h-14 sm:h-12'
                            >
                                {headers.map((h, i) => (
                                    <td
                                        key={i}
                                        className='text-[#3d333a]/90 text-center font-base sm:text-base text-sm'>
                                        {
                                            dat[h.prop]
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
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

