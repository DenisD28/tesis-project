import { useEffect, useState } from 'react';
import ButtonForm from '../Forms/ButtonComponents/ButtonForm'
import { ciudad, cliente, municipioCiudad } from '../types.d';
import { agregarCliente, departamentos, municipio } from '../../services/Services';
import { useNavigate } from 'react-router-dom';

export default function FormAdd() {

  const [formProducto, setFormProduct] = useState<cliente>({ name: "", address: "", city_id: 0, municipality_id: 0, phone_main: "", phone_secondary: "", type: "", details: "" })
  let state = { ciudades: [] }
  let stateM = { municipios: [] }
  const [lista, setDepartamento] = useState<ciudad>([]);
  const [listaMunicipios, setMunicipio] = useState<municipioCiudad>([]);
  const navigation = useNavigate()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === "city_id") {
      listaMunicipio(value)
    }
    setFormProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const lista = async () => {
      try {
        const { ciudades } = await departamentos()
        state = ({
          ciudades
        })
        setDepartamento(ciudades)
      } catch (e) {
        console.log(e)
      }
    }
    lista()
  }, [])

  const listaMunicipio = async (id: string) => {
    try {
      const { municipios } = await municipio(id)
      stateM = ({
        municipios
      })
      setMunicipio(municipios)
    } catch (e) {
      console.log(e)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await agregarCliente(formProducto)
      navigation("/clientes")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>

      <div className="flex justify-center items-center flex-col p-2">
        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Nombre *</label>
        <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="name" placeholder="Escribe el nombre del cliente" onChange={handleInputChange} value={formProducto.name} required />
      </div>
      <div className="flex justify-center items-center flex-col p-2">
        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Telefono principal</label>
        <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="phone_main" placeholder="Escribe el telefono principal del cliente" onChange={handleInputChange} value={formProducto.phone_main} />
      </div>
      <div className="flex justify-center items-center flex-col p-2">
        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="nombre">Telefono secundario</label>
        <input className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" type="text" name="phone_secondary" placeholder="Escribe el telefono secundario del cliente" onChange={handleInputChange} value={formProducto.phone_secondary} />
      </div>

      <div className="flex justify-center items-center flex-col p-2">
        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="departamento">Tipo de cliente *</label>
        <select onChange={handleSelectChange} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="type" id="type" value={formProducto.type} required>
          <option value="Por Mayor">Por mayor</option>
          <option value="Al detalle">Al detalle</option>
        </select>
      </div>
      <div className="flex justify-center items-center flex-col p-2">
        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="city_id">Departamento *</label>
        <select onChange={handleSelectChange} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="city_id" id="city_id" value={formProducto.city_id} required>
          <option value="">Selecciona el departamento del cliente</option>
          {
            lista.map(pro => (
              <option value={pro.id}>{pro.name}</option>
            ))
          }
        </select>
      </div>
      <span className='row-span-2'>
        <div className="flex justify-center items-center flex-col p-2">
          <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="address">Direccion</label>
          <textarea className="w-full h-36 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="address" id="address" placeholder="Escribe la direccion del cliente" onChange={handleTextAreaChange} value={formProducto.address}></textarea>
        </div>
      </span>
      <div className="flex justify-center items-center flex-col p-2">
        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor="municipality_id">Municipio *</label>
        <select onChange={handleSelectChange} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name="municipality_id" id="municipality_id" value={formProducto.municipality_id} required>
          <option value="">Selecciona el municipio del cliente</option>
          {
            listaMunicipios.map(pro => (
              <option value={pro.id}>{pro.name}</option>
            ))
          }
        </select>
      </div>
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
