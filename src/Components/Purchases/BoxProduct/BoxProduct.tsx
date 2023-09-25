import React from 'react'

export default function BoxProduct() {
  return (
    <div className='bg-[#f1f5f9] w-full h-auto p-4'>
        <div className='flex justify-between items-center w-full h-auto px-2'>
            <section className='[&>h1>b]:text-[#666]'>
                <h1 className='text-md font-medium text-[#999]'><b>Producto: </b> Jalea de frambuesa</h1>
                <h1 className='text-md font-medium text-[#999]'><b>Cantidad: </b> 20</h1>
                <h1 className='text-md font-medium text-[#999]'><b>Precio por unidad</b> C$ 100.00</h1>
                <h1 className='text-md font-medium text-[#999]'><b>Observaciones: </b> Compra de Jalea de frambuesa</h1>
                <h1 className='text-md font-medium text-[#999]'><b>Total: </b> C$ 2,000.00</h1>
            </section>
            <button className='text-red-600 h-10 font-medium hover:bg-red-600 hover:text-white px-2 rounded-md flex items-center gap-2 border-2 border-red-600'>
                Eliminar producto
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 7l16 0"></path>
                    <path d="M10 11l0 6"></path>
                    <path d="M14 11l0 6"></path>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
            </button>
        </div>
    </div>
  )
}
