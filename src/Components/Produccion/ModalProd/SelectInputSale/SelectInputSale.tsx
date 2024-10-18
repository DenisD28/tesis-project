import InputSale from '../InputSale/InputSale'
import { InputSaleProps } from './SelectInputPropsType'

export default function SelectInputSale({ handleOnClickInput, DataInput }: InputSaleProps) {
    return (
        <>
            <h1 className='text-lg col-span-12 font-bold text-green-600 text-center py-4'>Seleccionar entrada</h1>
            {
                DataInput.length === 0
                    ? <h1 className='text-lg col-span-12 font-bold text-red-600 text-center py-4'>No hay entradas del producto</h1>
                    : <InputSale handleOnClickInput={handleOnClickInput} DataInput={DataInput} />
            }
        </>
    )
}
