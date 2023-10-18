import { GeneralInfoSaleProps } from "./GeneralInfoSalePropsType"

export default function GeneralInfoSale({
    Cliente,
    NumeroFactura,
    TipoPago,
    Nota,
    PaymentStatus,
}: GeneralInfoSaleProps) {
    return (
        <article className='mt-8'>
            <section className='flex justify-between items-center h-14 pr-2'>
                <h1 className='font-bold text-2xl'>Informaci&oacute;n general</h1>
            </section>
            <section className='border-2 h-auto mt-4 rounded-md p-4 flex justify-start items-start flex-col gap-2 bg-slate-100'>
                <p><b>Cliente:</b> {Cliente}</p>
                <p><b>Numero de factura:</b> {NumeroFactura}</p>
                <p><b>Tipo de pago:</b> {TipoPago}</p>
                <p><b>Nota:</b> {Nota}</p>
                <p><b>Estado de pago:</b> {PaymentStatus}</p>
            </section>
        </article>
    )
}
