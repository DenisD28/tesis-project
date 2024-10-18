import { Trash2 } from 'lucide-react';
import { ShowInfoSaleProps } from './ShowInfoSalePropsTypes';

export default function ShowInfoSale({ Data, fnDeleteDetailsSale }: ShowInfoSaleProps) {
  return (

    < article className='bg-slate-100 w-full rounded-md p-4 flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0 border-2' >
      <section>

        <p><b>Cantidad:</b> {Data.quantity}</p>
        <p><b>Precio:</b> C${Data.detail_purchase_id.price}</p>
        <p><b>ID de entrada:</b> {Data.detail_purchase_id.id}</p>
        <p><b>Nombre del producto:</b> {Data.detail_purchase_id.product_id}</p>
        {/* <p><b>Costo de produccion:</b> C${Data.product_input.price}</p> */}
      </section>
      <section>
        <button className='w-full hover:bg-red-600 border-2 border-red-600 text-red-600 font-medium hover:text-white py-2 px-4 rounded-md flex justify-center items-center gap-1 transition-all' onClick={() => { fnDeleteDetailsSale(Data) }}>
          Eliminar producto
          <Trash2 className='ml-2' size={20} />
        </button>
      </section>
    </article >
  )
}
