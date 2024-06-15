import SelectForm from '../../Forms/SelectComponents/SelectForm'
import ButtonForm from '../../Forms/ButtonComponents/ButtonForm'
import { Receipt } from 'lucide-react'
import { FormProdProps } from './FormProdPropsTypes'
import { useEffect, useState } from 'react'
import { inventario } from '../../types.d'
import { listaProductoTerminado } from '../../../services/Products/ListaInventarioPTServices'

export default function FormProd({ setCodigo, HandleNextOperation, }: FormProdProps) {
  const [producto, setProducto] = useState<inventario[]>([])

  useEffect(() => {
    lista()
  }, [])

  const lista = async () => {
    try {
      // const { links, meta, clients } = await listaCliente()
      const { inventario } = await listaProductoTerminado(1)

      setProducto(inventario)
    } catch (e) {
      // console.log(e)
    }
  }

  return (
    <article className="grid grid-cols-12 md:[&>section]:col-span-6 [&>section]:col-span-full border-2 p-4 rounded-md">
      <h2 className='col-span-12 p-2 text-lg font-medium text-[#000] flex gap-2'>
        <Receipt />
        Informaci&oacute;n del producto
      </h2>
      <section>
        <SelectForm dataSelect={{
          title: 'Producto a Ingresar',
          name: 'producto',
          placeholder: 'Seleccione el producto',
          options: producto.map((item: inventario) => ({ 'valor': item.id, 'texto': item.product.name })),
          fnChange: setCodigo,
          isRequerid: true
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
