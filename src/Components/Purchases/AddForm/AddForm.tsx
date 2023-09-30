import React from 'react'
import InputsForm from '../../Forms/InputsComponents/InputsForm'
import SelectForm from '../../Forms/SelectComponents/SelectForm'
import AddFormType from './AddFormType'

export default function AddForm({props}: {props: AddFormType}) {
    const [numberBill, setNumberBill] = React.useState('')
    const [provider, setProvider] = React.useState('')
  return (
    <form onSubmit={(e) => props.handleSubmition(e, numberBill, provider)} className='col-span-12 grid grid-cols-12'>
        <div className='col-span-4'>
            <InputsForm DataInputs={{
                'title': 'N° Factura',
                'type': 'text',
                'placeholder': 'Ingrese el número de factura',
                'name': 'n_factura',
                'fnChange': setNumberBill,
            }} />
        </div>
        <div className='col-span-4'>
            <SelectForm dataSelect={{
                'title': 'Proveedor',
                'name': 'proveedor',
                'placeholder': 'Seleccione el proveedor',
                'options': ['Proveedor 1', 'Proveedor 2', 'Proveedor 3'],
                'fnChange': setProvider,
            }} />
        </div>
        <div className='col-span-4 flex justify-end items-end p-2'>
            <button className='bg-purple-icons text-white font-medium w-full h-10 rounded-md'>Siguiente</button>
        </div>
    </form>
  )
}
