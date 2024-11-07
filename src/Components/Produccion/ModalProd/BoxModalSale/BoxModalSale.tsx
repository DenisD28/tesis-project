import { useState } from 'react'
import { BoxModalSaleProps } from './BoxModalSalePropsTypes'

export default function BoxModalSale({ isSelected, fnOnSelect, Data }: BoxModalSaleProps) {
    const [Status, setStatus] = useState(isSelected)
    const [color, setColor] = useState(isSelected ? 'bg-green-100' : 'bg-white')
    const handleOnClick = () => {
        setStatus(!Status)
        setColor(!Status ? 'bg-green-100' : 'bg-white')
        if (!Status && fnOnSelect) {
            fnOnSelect(Data)
        }
    }

    return (
        <div className={`flex ${color} justify-between w-full h-auto rounded-md cursor-pointer border-2 border-zinc-200 p-2`} onClick={handleOnClick}>
            <div className='grid grid-cols-12 md:[&>span]:col-span-4 [&>span]:col-span-12 w-full'>
                <span className='flex justify-center items-center flex-col'>
                    <p className='font-medium'>ID</p>
                    <p className='font-medium text-green-500'>{Data.id}</p>
                </span>
                <span className='flex justify-center items-center flex-col'>
                    <p className='font-medium'>Disponibilidad</p>
                    <p className='font-medium text-green-500'>{Data.disponibility}</p>
                </span>
                <span className='flex justify-center items-center flex-col'>
                    <p className='font-medium'>Precio</p>
                    <p className='font-medium text-green-500'>{Data.price}</p>
                </span>
            </div>
            <div className='w-8 flex justify-start items-center'>
                <input type="checkbox" checked={Status} />
            </div>
        </div>
    )
}
