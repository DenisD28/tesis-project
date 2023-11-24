import './Table.css'
import Head from './Head/Head'
import { HeadType } from './types/HeadType'
import { useEffect, useState } from 'react'


interface Props {
    headers: HeadType[]
    data: [] | undefined
    titleTable: string
    fnClick: (dat: any) => any
}

export const Table: React.FC<Props> = ({ headers, data, titleTable, fnClick }) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (fnClick != null) {
            setIsOpen(true);
        }
    }, [fnClick]);

    return (
        <div className='px-8 rounded-xl bg-white md:h-96 h-80 overflow-y-auto hidden-scroll shadow-lg shadow-[#ddd] border-2'>
            <h1 className='sm:text-2xl text-lg font-bold my-4 h-16 w-full sticky top-0 left-0 bg-white pt-4 text-[#4F46E5]'>{titleTable}</h1>
            <table className='w-full h-full'>
                <Head headers={headers} />
                <tbody>
                    {data?.map((dat, index) => (
                        <tr
                            key={index}
                            className='border-b-[1px] border-[#eee] h-14 sm:h-12'
                        >
                            {headers.map((h, i) => (
                                <td
                                    key={i}
                                    className='text-[#3d333a]/90 text-center font-base sm:text-base text-sm'>
                                    {h.prop === 'product' ? (dat[h.prop] as { name: string }).name : dat[h.prop]}
                                </td>
                            ))}
                            {isOpen && (
                                <td>
                                    <button onClick={() => fnClick(dat)}>Ver Mas</button>
                                </td>
                            )
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}
