import { Nav } from '../../Components/Navegador/Nav'
import { FormAddProveedores } from '../../Components/Proveedores/FormAddProveedores'
import { Menu } from '../../routes/Menu'

export default function AddOrganizacion() {
    return (
        <div className="contenedor">
            <div className="div-menu">
                <Menu />
            </div>
            <div className="div-dashboard">
                <div>
                    <Nav />
                </div>
                <div className="contenido">
                    <div className='py-4 pb-28 px-8 h-screen overflow-y-auto'>
                        <h1 className='text-[#4F46E5] text-2xl font-bold my-4'>Registro de proveedores</h1>
                        <FormAddProveedores />
                    </div>
                </div>
            </div>
        </div>
    )
}