import { HeadType } from "../types/HeadType"


export default function Head({ headers }: { headers: HeadType[] }) {
  return (
    <thead>
      <tr className='sticky sm:text-base text-sm top-0 left-0 bg-[#f8f5fe] h-10 text-[#606468] font-base uppercase'>
        {headers.map((head, index) => (
          <th key={index}>{head.name}</th>
        ))}
        <th>
          Acciones
        </th>
      </tr>

    </thead>
  )
}
