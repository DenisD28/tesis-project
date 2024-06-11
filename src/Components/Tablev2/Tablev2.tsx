import Head from './Head/Head'
import { HeadType } from './types/HeadType'
import { useEffect, useState } from 'react'

interface Props {
    headers: HeadType[]
    data: [] | undefined
    fnClick: ((dat: any) => void) | null
}

export const Tablev2: React.FC<Props> = ({ headers, data, fnClick }) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (fnClick != null) {
            setIsOpen(true);
        }
    }, [fnClick]);

    return (
        <table className="w-full min-w-[40rem] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <Head headers={headers}/>
            <tbody>
            {data?.map((dat, index) => (
                <tr
                    key={index}
                    onClick={() => fnClick?.(dat)}
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
                            <a className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                               > ver mas</a>
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
    )
}
