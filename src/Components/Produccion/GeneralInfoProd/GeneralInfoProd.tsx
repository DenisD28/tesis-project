import { GeneralInfoProdProps } from "./GeneralInfoProdPropsType"

export default function GeneralInfoProd({
    Codigo,
}: GeneralInfoProdProps) {
    return (
        <article className='mt-8'>
            <section className='flex justify-between items-center h-14 pr-2'>
                <h1 className='font-bold text-2xl'>Informaci&oacute;n general</h1>
            </section>
            <section className='border-2 h-auto mt-4 rounded-md p-4 flex justify-start items-start flex-col gap-2 bg-slate-100'>
                <p><b>Codigo:</b> {Codigo}</p>
            </section>
        </article>
    )
}
