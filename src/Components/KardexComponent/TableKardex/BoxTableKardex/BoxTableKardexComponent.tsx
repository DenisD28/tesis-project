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
                    <BoxShowInformationComponent title={"Fecha"} value={dat.created_at}/>
                    <BoxShowInformationComponent title={"Descripción"} value={dat.observation}/>
                    <BoxShowInformationComponent title={"Cantidad"} value={dat.input>0 ? dat.input : dat.output}/>
                    <BoxShowInformationComponent title={"Valor Unitario"} value={`C$ ${dat.price}`}/>
                    <BoxShowInformationComponent title={"Valor Total"} value={`C$ ${dat.total}`}/>
                </div>
            )}
        </div>
    )
}