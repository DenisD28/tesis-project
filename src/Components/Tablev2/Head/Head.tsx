import { HeadType } from "../types/HeadType"


export default function Head({ headers }: { headers: HeadType[] }) {
    return (
        // <thead>
        //     <tr className='sticky sm:text-base text-sm top-16 left-0 bg-[#f8f5fe] h-10 text-[#606468] font-base uppercase'>
        //         {headers.map((head, index) => (
        //             <th key={index}>{head.name}</th>
        //         ))}
        //         <th>
        //             Acciones
        //         </th>
        //     </tr>

        // </thead>

        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {headers.map((head, index) => (
                    <th scope="clo" className="px-6 py-3" key={index}>{head.name}</th>
                ))}

                {/* <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th> */}
            </tr>
        </thead>
    )
}
