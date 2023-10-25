import { Trash2 } from 'lucide-react';
import { ShowInfoSaleProps } from './ShowInfoSalePropsTypes';

export default function ShowInfoSale({ Data, fnDeleteDetailsSale }: ShowInfoSaleProps) {
  return (
    <article className='bg-slate-100 w-full rounded-md p-4 flex justify-between items-center border-2'>
      <section>
        <p><b>Cantidad:</b> {Data.quantity}</p>
        <p><b>Precio:</b> C${Data.price}</p>
        <p><b>ID de entrada:</b> {Data.product_input.id}</p>
        <p><b>Fecha de produccion:</b> {Data.product_input.date}</p>
        <p><b>Costo de produccion:</b> C${Data.product_input.price}</p>
      </section>
      <section>
        <button className='w-full hover:bg-red-600 border-2 border-red-600 text-red-600 font-medium hover:text-white py-2 px-4 rounded-md flex justify-center items-center gap-1 transition-all' onClick={() => { fnDeleteDetailsSale(Data) }}>
          Eliminar producto
          <Trash2 className='ml-2' size={20} />
        </button>
      </section>
    </article>
  )
}
