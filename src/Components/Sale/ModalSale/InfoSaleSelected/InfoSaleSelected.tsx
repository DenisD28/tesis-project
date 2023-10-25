import ButtonForm from '../../../Forms/ButtonComponents/ButtonForm'
import { InfoSaleSelectedProps } from './InfoSaleSelectedPropsTypes'

export default function InfoSaleSelected({ Data, fnDeleteInput }: InfoSaleSelectedProps) {
  return (
    <section className="bg-gray-100 p-4 rounded-md shadow-md col-span-12 m-2 [&>p]:mb-2">
      <h1 className="font-bold text-lg my-2">Información de la entrada</h1>
      <p>
        <span className="font-bold">ID:</span> {Data.id}
      </p>
      <p>
        <span className="font-bold">Producción:</span> {Data.quantity}
      </p>
      <p>
        <span className="font-bold">Disponibilidad:</span> {Data.disponibility}
      </p>
      <p>
        <span className="font-bold">Costo:</span> {Data.price}
      </p>
      <p>
        <span className="font-bold">Fecha:</span> {Data.date}
      </p>
      <ButtonForm dataButton={{
        'title': 'Eliminar selección',
        'color': 'red',
        'type': 'button',
        'fnClick': fnDeleteInput,
      }} />
    </section>
  )
}
