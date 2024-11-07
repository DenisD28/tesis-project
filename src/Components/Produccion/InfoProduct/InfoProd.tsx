import { DetailsPurcharse } from '../../../types/SaleTypes/DetailsPurcharse'
import ShowInfoSale from '../ShowInfoProd/ShowInfoSale'
import { InfoProdProps } from './InfoProdPropsTypes'

export default function InfoProd({ DataPurcharse, fnClick, Data, fnDeleteDetailsSale }: InfoProdProps) {
  return (
    <article className='mt-8'>
      <section className='flex justify-between md:flex-row flex-col md:items-center gap-4 md:gap-0 md:h-14 pr-2'>
        <h1 className='text-purple-icons font-bold text-2xl'>Productos utilizados</h1>
        <button className='bg-blue-600 h-10 px-8 text-white font-semibold rounded-md' onClick={fnClick}>Agregar producto</button>
      </section>
      <section className='border-2 h-auto mt-4 rounded-md p-2 flex justify-start items-start flex-col gap-2'>
        {
          DataPurcharse.length === 0 && <h1 className='text-lg w-full font-medium text-red-600/50 text-center'>No hay productos seleccionados</h1>
        }
        {
          DataPurcharse.map((dat, index) => (
            <ShowInfoSale key={index} Data={dat} fnDeleteDetailsSale={function (Data: DetailsPurcharse): void {
              throw new Error('Function not implemented.')
            }} />
          ))
        }
      </section>
    </article>
  )
}
