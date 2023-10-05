import { HeadType } from '../Table/types/HeadType'

interface TableSecondaryProps {
    headers: HeadType[]
    data: string[]
}

export default function TableSecondary({headers, data}: TableSecondaryProps) {
  return (
    <table className="table-auto w-full">
        <thead className='bg-[#eee] sticky top-0 [&>tr>th]:px-4 [&>tr>th]:py-2 [&>tr>th]:text-center'>
            <tr>
                {
                    headers.map((h, i) => (
                        <th key={i}>{h.name}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody className='h-32 overflow-y-scroll [&>tr>td]:px-4 [&>tr>td]:py-2 [&>tr>td]:text-center'>
            {
                data.map((d, i) => (
                    <tr key={i}>
                        {
                            <>
                                <td>{d}</td>
                                <td><button className='bg-green-600 text-white font-medium w-full py-2 px-4 rounded-md'>Seleccionar</button></td>
                            </>
                        }
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}
