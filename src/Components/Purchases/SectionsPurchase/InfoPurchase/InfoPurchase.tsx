import { Receipt } from 'lucide-react'
import AddForm from '../../AddForm/AddForm'
import DataPurchase from '../../DataPurchase/DataPurchase'
import { InfoPurchaseProps } from './InfoPurchaseProps'

export default function InfoPurchase({statusInfo, provider, numberBill, handleSubmit}: InfoPurchaseProps) {
  return (
    <div className='w-full my-4 grid grid-cols-12 border-2 rounded-md p-8 gap-2'>
        <h1 className='col-span-full md:col-span-4 p-2 text-lg font-medium text-[#000] flex gap-2'>
        <Receipt />
            Informaci&oacute;n de la factura
        </h1>
        {
            statusInfo 
            ? <AddForm props={{'handleSubmition': handleSubmit}} /> 
            :   <DataPurchase provider={provider} numberBill={numberBill} />
        }
    </div>
  )
}
