import { DataPurchaseProps } from './DataPurchaseProps'

export default function DataPurchase({provider, numberBill, total}: DataPurchaseProps) {
  return (
    <section className='col-span-12 [&>h3>b]:text-[#666] [&>h3]:font-medium text-[#999] px-4'>
        <h3><b>Proveedor: </b>{provider}</h3>
        <h3><b>Numero de factura: </b>{numberBill}</h3>
        <h3><b>Fecha de registro: </b> { new Date().toLocaleDateString()}</h3>
        <h3 className='text-green-600'><b>Total: </b> C$ {total.toFixed(2)}</h3>
    </section>
  )
}
