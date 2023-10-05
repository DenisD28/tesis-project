import InputsForm from '../Forms/InputsComponents/InputsForm'
import SelectForm from '../Forms/SelectComponents/SelectForm'
import TextareaForm from '../Forms/TextareaComponents/TextareaForm'
import ButtonForm from '../Forms/ButtonComponents/ButtonForm'

export default function FormAdd() {
  return (
    <form action="" className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
      <InputsForm DataInputs={{
        'title': 'Nombre',
        'type': 'text',
        'name': 'nombre',
        'placeholder': 'Escribe el nombre del cliente',
        'value': '',
        'fnChange': () => { },
      }} />
      <InputsForm DataInputs={{
        'title': 'Telefono principal',
        'type': 'text',
        'name': 'telefono',
        'placeholder': 'Escribe el telefono principal del cliente',
        'value': '',
        'fnChange': () => { },
      }} />
      <InputsForm DataInputs={{
        'title': 'Telefono secundario',
        'type': 'text',
        'name': 'telefonoSecundario',
        'placeholder': 'Escribe el telefono secundario del cliente',
        'value': '',
        'fnChange': () => { },
      }} />
      <SelectForm
        dataSelect={{
          'title': 'Tipo de cliente',
          'name': 'tipoCliente',
          'placeholder': 'Selecciona el tipo de cliente',
          'options': [
            { 'valor': 1, 'texto': 'Cliente' },
            { 'valor': 2, 'texto': 'Mayorista' },
          ],
          'fnChange': () => { },
        }}
      />
      <SelectForm
        dataSelect={{
          'title': 'Departamento',
          'name': 'departamento',
          'placeholder': 'Selecciona el el departamento del cliente',
          'options': [
            { 'valor': 1, 'texto': 'Chinandega' },
            { 'valor': 2, 'texto': 'Leon' },
            { 'valor': 3, 'texto': 'Managua' },
            { 'valor': 4, 'texto': 'Masaya' },
            { 'valor': 5, 'texto': 'Matagalpa' },
          ],
          'fnChange': () => { },
        }}
      />
      <span className='row-span-2'>
        <TextareaForm dataTextarea={{
          'title': 'Direccion',
          'name': 'direccion',
          'placeholder': 'Escribe la direccion del cliente',
          'value': '',
          'fnChange': () => { },
        }} />
      </span>
      <SelectForm dataSelect={{
        'title': 'Municipio',
        'name': 'municipio',
        'placeholder': 'Selecciona el municipio del cliente',
        'options': [
          { 'valor': 1, 'texto': 'Chinandega' },
          { 'valor': 2, 'texto': 'Leon' },
          { 'valor': 3, 'texto': 'Managua' },
          { 'valor': 4, 'texto': 'Masaya' },
          { 'valor': 5, 'texto': 'Matagalpa' },
        ],
        'fnChange': () => { },
      }} />
      <ButtonForm dataButton={{
        'title': 'Cancelar',
        'color': 'red',
        'type': 'reset',
        'fnClick': () => { },
      }} />
      <ButtonForm dataButton={{
        'title': 'Guardar',
        'color': 'green',
        'type': 'submit',
        'fnClick': () => { },
      }} />
    </form>
  )
}
