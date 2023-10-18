import ShowInfoSale from '../ShowInfoSale/ShowInfoSale'
import { InfoSaleProps } from './InfoSalePropsTypes'

export default function InfoSale({fnClick, Data, fnDeleteDetailsSale}: InfoSaleProps) {
  return (
    <article className='mt-8'>
        <section className='flex justify-between items-center h-14 pr-2'>
          <h1 className='text-purple-icons font-bold text-2xl'>Productos vendidos</h1>
          <button className='bg-blue-600 h-10 px-8 text-white font-semibold rounded-md' onClick={fnClick}>Agregar producto</button>
        </section>
        <section className='border-2 h-auto mt-4 rounded-md p-2 flex justify-start items-start flex-col gap-2'>
          {
            Data.length === 0 && <h1 className='text-lg w-full font-medium text-red-600/50 text-center'>No hay productos seleccionados</h1>
          }
          {
            Data.map((data, index) => (
              <ShowInfoSale key={index} Data={data} fnDeleteDetailsSale={fnDeleteDetailsSale} />
            ))
          }
        </section>
    </article>
  )
}
