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
                    className={`px-6 py-3 flex justify-start items-center ${dat["input"]>0 ? 'bg-green-50' : 'bg-red-50'}`}>
                    {h.prop === 'product' ? (dat[h.prop] as { name: string }).name : dat[h.prop]}
                </div>
            ))}
            {showInfo && (
                <div
                    className='px-6 py-3 text-center border-t-2 col-span-4'
                >
                    <BoxShowInformationComponent title={"Registrado por"} value={"Andres Alexander Cornejo Lira"}/>
                    <BoxShowInformationComponent title={"Fecha"} value={"2021-10-10"}/>
                    <BoxShowInformationComponent title={"Descripción"} value={"Compra de materia prima a proveedor Quitzon, Schaefer and Ritchie. Fact No.3123 el 11-06-2024."}/>
                    <BoxShowInformationComponent title={"Cantidad"} value={"100"}/>
                    <BoxShowInformationComponent title={"Valor Unitario"} value={"C$ 100.00"}/>
                    <BoxShowInformationComponent title={"Valor Total"} value={"C$ 10000.00"}/>
                </div>
            )}
        </div>
    )
}