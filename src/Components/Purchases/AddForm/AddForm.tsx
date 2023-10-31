import {useEffect, useState} from 'react'
import InputsForm from '../../Forms/InputsComponents/InputsForm'
import SelectForm from '../../Forms/SelectComponents/SelectForm'
import AddFormType from './AddFormType'
import { listaProveedores } from '../../../services/Services'
import { provider } from '../../../types/ProviderTypes/dataProvider'

export default function AddForm({props}: {props: AddFormType}) {
    const [numberBill, setNumberBill] = useState('')
    const [provider, setProvider] = useState('')
    const [listProviders, setListProviders] = useState<provider[]>([])
    let state = { links: [], meta: [], proveedores: [] }

    useEffect(() => {
        lista()
    }, [])

    const lista = async () => {
        try {
            const { links, meta, proveedores } = await listaProveedores()
            state = ({
                links,
                meta,
                proveedores
            })
            setListProviders(proveedores)
        } catch (e) {
            console.log(e)
        }
    }

  return (
    <form onSubmit={(e) => props.handleSubmition(e, numberBill, provider)} className='col-span-12 grid grid-cols-12'>
        <div className='col-span-4'>
            <InputsForm DataInputs={{
                'title': 'N° Factura',
                'type': 'text',
                'placeholder': 'Ingrese el número de factura',
                'name': 'n_factura',
                'value': numberBill,
                'fnChange': setNumberBill,
                'isRequire': true
            }} />
        </div>
        <div className='col-span-4'>
            <SelectForm dataSelect={{
                'title': 'Proveedor',
                'name': 'proveedor',
                'placeholder': 'Seleccione el proveedor',
                'options': listProviders.map((item: provider) => ({'valor': item.id, 'texto': item.name})),
                'fnChange': setProvider,
                'isRequerid': true
            }} />
        </div>
        <div className='col-span-4 flex justify-end items-end p-2'>
            <button className='bg-purple-icons text-white font-medium w-full h-10 rounded-md'>Siguiente</button>
        </div>
    </form>
  )
}
