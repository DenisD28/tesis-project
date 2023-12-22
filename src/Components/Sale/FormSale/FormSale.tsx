import SelectForm from '../../Forms/SelectComponents/SelectForm'
import InputsForm from '../../Forms/InputsComponents/InputsForm'
import ButtonForm from '../../Forms/ButtonComponents/ButtonForm'
import { Receipt } from 'lucide-react'
import { FormSaleProps } from './FormSalePropsTypes'
import { useEffect, useState } from 'react'
import { listaCliente1 } from '../../../services/Clients/ListaClientesServices'
import { cliente, lstCliente } from '../../types.d'

export default function FormSale({ setCliente, setNumeroFactura, setTipoPago, setNota, HandleNextOperation, NumeroFactura, Nota }: FormSaleProps) {
  const [clientes, setClientes] = useState<lstCliente>([])

  useEffect(() => {
    lista()
  }, [])

  const lista = async () => {
    try {
      // const { links, meta, clients } = await listaCliente()
      const { clients } = await listaCliente1()

      setClientes(clients)
    } catch (e) {
      // console.log(e)
    }
  }

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
          options: clientes.map((item: cliente) => ({ 'valor': item.id, 'texto': item.name })),
          fnChange: setCliente,
          isRequerid: true
        }} />
      </section>
      <section>
        <InputsForm DataInputs={{
          title: 'Numero de factura',
          type: 'number',
          placeholder: 'Ingrese el numero de la factura',
          name: 'numero_factura',
          value: NumeroFactura,
          fnChange: setNumeroFactura,
          isRequire: true
        }} />
      </section>
      <section>
        <SelectForm dataSelect={{
          title: 'Tipo de pago',
          name: 'type_payment',
          placeholder: 'Seleccione el tipo de pago',
          options: [
            { "valor": "contado", "texto": "Contado" },
            { "valor": "credito", "texto": "Credito" },
          ],
          fnChange: setTipoPago,
          isRequerid: true
        }} />
      </section>
      <section>
        <InputsForm DataInputs={{
          title: 'Nota',
          type: 'text',
          placeholder: 'Ingrese una nota',
          name: 'nota',
          value: Nota,
          fnChange: setNota,
          isRequire: false
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
