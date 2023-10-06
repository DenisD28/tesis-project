import { Trash2 } from 'lucide-react';
import { BoxProductProps } from './BoxProductProps';

export default function BoxProduct({data, fnDelete}: BoxProductProps) {
    const fnDeleteProduct = () => {
        fnDelete(data)
    }
    return (
    <div className='bg-[#f1f5f9] w-full h-auto p-4'>
        <div className='flex justify-between items-center w-full h-auto px-2'>
            <section className='[&>h1>b]:text-[#666]'>
                <h1 className='text-md font-medium text-[#999]'><b>Producto: </b> {data.name}</h1>
                <h1 className='text-md font-medium text-[#999]'><b>Cantidad: </b> {data.quantity}</h1>
                <h1 className='text-md font-medium text-[#999]'><b>Precio por unidad</b> C$ {(data.unit_price).toFixed(2)}</h1>
                <h1 className='text-md font-medium text-[#999]'><b>Observaciones: </b> {data.observation}</h1>
                <h1 className='text-md font-medium text-[#999]'><b>Total: </b> C$ {(data.total).toFixed(2)}</h1>
            </section>
            <button onClick={() => fnDeleteProduct()} className='text-red-600 h-10 font-medium hover:bg-red-600 hover:text-white px-2 rounded-md flex items-center gap-2 border-2 border-red-600'>
                Eliminar Producto
                <Trash2 />
            </button>
        </div>
    </div>
    )
}
