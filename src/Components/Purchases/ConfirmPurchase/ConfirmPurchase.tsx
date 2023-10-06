import ButtonForm from '../../Forms/ButtonComponents/ButtonForm'
import { ConfirmPurchaseProps } from './ConfirmPurchaseProps'

export default function ConfirmPurchase({total, SendPurchase}: ConfirmPurchaseProps) {
  return (
    <div className='w-full my-4 grid grid-cols-12'>
        <div className='col-span-12'>
            <ButtonForm dataButton={{
                'title': `Registrar compra por C$ ${total.toFixed(2)}`,
                'color': 'green',
                'type': 'button',
                'fnClick': SendPurchase,
            }} />
        </div>
    </div>
  )
}
