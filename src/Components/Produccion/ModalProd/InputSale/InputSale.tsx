import BoxModalSale from '../BoxModalSale/BoxModalSale'
import { InputSaleProps } from './InputSalePropsType'

export default function InputSale({handleOnClickInput, DataInput}: InputSaleProps) {
  return (
    <section className='col-span-12 flex flex-col border-2 bg-slate-100 h-80 rounded-md m-2 p-2 overflow-y-scroll scroll-hidden gap-2'>
        {
            DataInput.map((data, index) => (
                <BoxModalSale key={index} isSelected={false} fnOnSelect={handleOnClickInput} Data={data} />
            ))
        }
    </section>
  )
}
