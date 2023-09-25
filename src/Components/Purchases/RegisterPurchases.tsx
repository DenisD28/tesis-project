import React from 'react'
import AddForm from './AddForm/AddForm'
import BoxProduct from './BoxProduct/BoxProduct'

export default function RegisterPurchases() {
    const [numberBill, setNumberBill] = React.useState('')
    const [provider, setProvider] = React.useState('')
    const [statusInfo, setStatusInfo] = React.useState(true)
    const [total, setTotal] = React.useState(0)
    const [products, setProducts] = React.useState([])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, infoNumberBill: string, infoProvider: string) => {
        e.preventDefault()
        if(infoNumberBill !== '' && infoProvider !== ''){
            setNumberBill(infoNumberBill)
            setProvider(infoProvider)
            setStatusInfo(false)
        }
    }
  return (
    <>
        <h1 className=' text-purple-icons font-bold text-2xl'>Registro de compra</h1>
        <div className='w-full my-4 grid grid-cols-12 border-2 rounded-md p-8 gap-2'>
            <h1 className='col-span-4 p-2 text-lg font-medium text-[#000] flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-receipt-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path>
                    <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"></path>
                </svg>
                Informaci&oacute;n de la factura
            </h1>
            {
                statusInfo ? <AddForm props={{
                    'handleSubmition': handleSubmit,
                }} /> 
                :   <section className='col-span-12 [&>h3>b]:text-[#666] [&>h3]:font-medium text-[#999] px-4'>
                        <h3><b>Proveedor: </b>{provider}</h3>
                        <h3><b>Numero de factura: </b>{numberBill}</h3>
                        <h3><b>Fecha de registro: </b> { new Date().toLocaleDateString()}</h3>
                        <h3 className='text-green-600'><b>Total: </b> C$ {total.toFixed(2)}</h3>
                    </section>
            }
        </div>
        <section className='flex justify-between items-center h-14 pr-2'>
            <h1 className='text-lg font-medium text-[#999]'>Registro de productos</h1>
            <button className='bg-purple-icons h-10 px-8 text-white font-semibold rounded-md'>Agregar producto</button>
        </section>
        <section className='border-2 h-auto mt-4 rounded-md p-2 flex justify-start items-start flex-col gap-2'>
            {
                products.length === 0 ? <h1 className='text-lg w-full font-medium text-red-600/50 text-center'>No hay productos seleccionados</h1> : <></>
            }
            {/* <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct />
            <BoxProduct /> */}
        </section>
        <div className=' bg-[#000] fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'>
            <h1>hola</h1>
        </div>
    </>
  )
}
