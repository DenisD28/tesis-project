import ButtonForm from '../../Forms/ButtonComponents/ButtonForm'
import { ConfirmProduccionProps } from './ConfirmProduccionProps'

export default function ConfirmProduccion({ SendPurchase }: ConfirmProduccionProps) {
    return (
        <div className='w-full my-4 grid grid-cols-12'>
            <div className='col-span-12'>
                <ButtonForm dataButton={{
                    'title': `Registrar produccion}`,
                    'color': 'green',
                    'type': 'button',
                    'fnClick': SendPurchase,
                }} />
            </div>
        </div>
    )
}
