import { dataProduct } from '../../../../types/ProductTypes/dataProduct'
import BoxProduct from '../../BoxProduct/BoxProduct'
import { InsertionProductsProps } from './InsertionProductsProps'

export default function InsertionProducts({products, toggleModal, deleteProduct}: InsertionProductsProps) {
  return (
    <>
        <section className='flex justify-between items-center h-14 pr-2'>
            <h1 className='text-purple-icons font-bold text-2xl'>Productos</h1>
            {/* <h1 className='text-lg font-medium text-[#999]'>Registro de productos</h1> */}
            <button onClick={toggleModal} className='bg-purple-icons h-10 px-8 text-white font-semibold rounded-md'>Agregar producto</button>
        </section>
        <section className='border-2 h-auto mt-4 rounded-md p-2 flex justify-start items-start flex-col gap-2'>
            {
                products.length === 0 
                ? <h1 className='text-lg w-full font-medium text-red-600/50 text-center'>No hay productos seleccionados</h1> 
                : (
                    products.map((item: dataProduct, index: number) => (
                        <BoxProduct key={index} data={item} fnDelete={deleteProduct}  />
                    ))
                )
            }
        </section>
    </>
  )
}
