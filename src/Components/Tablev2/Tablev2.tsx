import Head from './Head/Head'
import { HeadType } from './types/HeadType'
import { useEffect, useState } from 'react'


interface Props {
    headers: HeadType[]
    data: [] | undefined
    titleTable: string
    fnClick: ((dat: any) => void) | null
}

export const Tablev2: React.FC<Props> = ({ headers, data, titleTable, fnClick }) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (fnClick != null) {
            setIsOpen(true);
        }
    }, [fnClick]);

    return (

        <div className="px-8 rounded-xl bg-white md:h-96 h-80 overflow-y-auto hidden-scroll shadow-lg shadow-[#ddd] border-2">
            <h1 className='sm:text-2xl text-lg font-bold my-4 h-16 w-full sticky top-0 left-0 bg-white pt-4 text-[#4F46E5]'>{titleTable}</h1>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <Head headers={headers} />
                <tbody>
                    {data?.map((dat, index) => (
                        <tr
                            key={index}
                            className=' bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                        >
                            {headers.map((h, i) => (
                                <td
                                    key={i}
                                    className='px-6 py-4'>
                                    {h.prop === 'product' ? (dat[h.prop] as { name: string }).name : dat[h.prop]}
                                </td>
                            ))}
                            {isOpen && (
                                <td className='px-6 py-4 text-center'>
                                    <a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' onClick={() => fnClick?.(dat)}> ver mas</a>
                                </td>
                            )
                            }
                        </tr>))
                    }
                    {/* <td className="px-6 py-4 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td> */}
                </tbody>
            </table>
        </div>
    )
}
