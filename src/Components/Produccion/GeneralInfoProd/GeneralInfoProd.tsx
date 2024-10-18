import InputsForm from "../../Forms/InputsComponents/InputsForm"
import { GeneralInfoProdProps } from "./GeneralInfoProdPropsType"

export default function GeneralInfoProd({
    Codigo,
    Cantidad,
    cant
}: GeneralInfoProdProps) {
    return (
        <article className='mt-8'>
            <section className='flex justify-between items-center h-14 pr-2'>
                <h1 className='font-bold text-2xl'>Informaci&oacute;n general</h1>
            </section>
            <section className='border-2 h-auto mt-4 rounded-md p-4 flex justify-around items-center flex-row gap-2 bg-slate-100'>
                <p><b>Codigo:</b> {Codigo}</p>
                <div>
                    <InputsForm DataInputs={{
                        'title': 'Cantidad a Registrar',
                        'type': 'number',
                        'placeholder': 'Ingrese la cantidad',
                        'name': 'cantidad',
                        'value': cant,
                        'fnChange': Cantidad,
                        isRequire: true
                    }} />
                </div>
            </section>
        </article >
    )
}
