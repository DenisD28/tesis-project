import SelectForm from '../../Forms/SelectComponents/SelectForm'
import InputsForm from '../../Forms/InputsComponents/InputsForm'
import ButtonForm from '../../Forms/ButtonComponents/ButtonForm'
import { Receipt } from 'lucide-react'
import { FormSaleProps } from './FormSalePropsTypes'

export default function FormSale({setCliente, setNumeroFactura, setTipoPago, setNota, HandleNextOperation}: FormSaleProps) {
  return (
    <article className="grid grid-cols-12 [&>section]:col-span-6 border-2 p-4 rounded-md">
      <h2 className='col-span-12 p-2 text-lg font-medium text-[#000] flex gap-2'>
        <Receipt />
            Informaci&oacute;n de la venta
        </h2>
        <section>
          <SelectForm dataSelect={{
            title: 'Cliente',
            name: 'cliente',
            placeholder: 'Seleccione un cliente',
            options: [
              { "valor": "1", "texto":"Cliente 1" },
              { "valor": "2", "texto":"Cliente 2" },
              { "valor": "3", "texto":"Cliente 3" },
              { "valor": "4", "texto":"Cliente 4" },
              { "valor": "5", "texto":"Cliente 5" },
            ],
            fnChange: setCliente
          }} />
        </section>
        <section>
          <InputsForm DataInputs={{
            title: 'Numero de factura',
            type: 'number',
            placeholder: 'Ingrese el numero de la factura',
            name: 'numero_factura',
            value: '',
            fnChange: setNumeroFactura
          }} />
        </section>
        <section>
          <SelectForm dataSelect={{
            title: 'Tipo de pago',
            name: 'type_payment',
            placeholder: 'Seleccione el tipo de pago',
            options: [
              { "valor": "Contado", "texto":"Contado" },
              { "valor": "Credito", "texto":"Credito" },
            ],
            fnChange: setTipoPago
          }} />
        </section>
        <section>
          <InputsForm DataInputs={{
            title: 'Nota',
            type: 'text',
            placeholder: 'Ingrese una nota',
            name: 'nota',
            value: '',
            fnChange: setNota
          }} />
        </section>
        <div className="col-span-12 grid items-center">
          <ButtonForm dataButton={{
            title: 'Siguiente',
            type: 'submit',
            color: 'blue',
            fnClick: HandleNextOperation
          }} />
        </div>
    </article>
  )
}
