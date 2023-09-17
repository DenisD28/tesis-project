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
      }} />
      <InputsForm DataInputs={{
        'title': 'Telefono principal',
        'type': 'text',
        'name': 'telefono',
        'placeholder': 'Escribe el telefono principal del cliente',
      }} />
      <InputsForm DataInputs={{
        'title': 'Telefono secundario',
        'type': 'text',
        'name': 'telefonoSecundario',
        'placeholder': 'Escribe el telefono secundario del cliente',
      }} />
      <SelectForm
        dataSelect={{
          'title': 'Tipo de cliente',
          'name': 'tipoCliente',
          'placeholder': 'Selecciona el tipo de cliente',
          'options': ['Por mayor', 'Al detalle'],
        }}
      />
      <SelectForm
        dataSelect={{
          'title': 'Departamento',
          'name': 'departamento',
          'placeholder': 'Selecciona el el departamento del cliente',
          'options': ['Chinandega', 'Leon', 'Managua', 'Masaya', 'Matagalpa'],
        }}
      />
      <span className='row-span-2'>
        <TextareaForm dataTextarea={{
          'title': 'Direccion',
          'name': 'direccion',
          'placeholder': 'Escribe la direccion del cliente',
        }} />
      </span>
      <SelectForm dataSelect={{
        'title': 'Municipio',
        'name': 'municipio',
        'placeholder': 'Selecciona el municipio del cliente',
        'options': ['Chinandega', 'Leon', 'Managua', 'Masaya', 'Matagalpa'],
      }} />
      <ButtonForm dataButton={{
        'title': 'Cancelar',
        'color': 'red',
        'type': 'reset',
      }} />
      <ButtonForm dataButton={{
        'title': 'Guardar',
        'color': 'green',
        'type': 'submit',
      }} />
    </form>
  )
}
