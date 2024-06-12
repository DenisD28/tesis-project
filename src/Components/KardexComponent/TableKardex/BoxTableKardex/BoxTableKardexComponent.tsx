import BoxShowInformationComponent from "../../BoxShowInformation/BoxShowInformationComponent.tsx";
import {useState} from "react";

export default function BoxTableKardexComponent({dat, headers}: {dat: any, headers: any[]}) {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div
            className='cursor-pointer bg-white border-b hover:bg-gray-50 col-span-4 grid grid-cols-4 transition-all'
            onClick={() => setShowInfo(!showInfo)}
        >
            {headers.map((h, i) => (
                <div
                    key={i}
                    className='px-6 py-3 flex justify-start items-center'>
                    {h.prop === 'product' ? (dat[h.prop] as { name: string }).name : dat[h.prop]}
                </div>
            ))}
            {showInfo && (
                <div
                    className='px-6 py-3 text-center border-t-2 col-span-4'
                >
                    <BoxShowInformationComponent title={"Cliente"} value={"Andres"}/>
                </div>
            )}
        </div>
    )
}