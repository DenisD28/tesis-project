import { 
    LayoutDashboard,
    Building2,
    User2,
    Users2,
    Truck,
    MoreHorizontal 
} from 'lucide-react';
import { MdOutlineShoppingBag } from 'react-icons/md'
import { LiaMoneyBillSolid } from 'react-icons/lia'

interface Route {
    path: string,
    title: string,
    icon: JSX.Element
}

const routesMain: Route[] = [
    {
        "path": "/dashboard",
        "title": "Panel principal",
        "icon": <LayoutDashboard />,
    },
    {
        "path": "/organizaciones",
        "title": "Organización",
        "icon": <Building2 />,
    },
    {
        "path": "/usuarios",
        "title": "Usuarios",
        "icon": <User2 />,
    },
    {
        "path": "/proveedores",
        "title": "Proveedores",
        "icon": <Truck />,
    },
    {
        "path": "/clientes",
        "title": "Clientes",
        "icon": <Users2 />,
    },
    {
        "path": "/compras",
        "title": "Compras",
        "icon": <MdOutlineShoppingBag className="w-6 h-auto" />,
    },
    {
        "path": "/ventas",
        "title": "Ventas",
        "icon": <LiaMoneyBillSolid className="w-6 h-auto" />,
    },
    {
        "path": "/more_options",
        "title": "Otras opciones",
        "icon": <MoreHorizontal />,
    },
]

const routesInventory: Route[] = [
    {
        "path": "/inventario",
        "title": "Materia prima",
        "icon": <LiaMoneyBillSolid className="w-6 h-auto" />,
    },
    {
        "path": "/inventarioTP",
        "title": "Productos terminados",
        "icon": <LiaMoneyBillSolid className="w-6 h-auto" />,
    },
    {
        "path": "/AddNewProduct",
        "title": "Nuevos productos",
        "icon": <LiaMoneyBillSolid className="w-6 h-auto" />,
    },
]

export {routesMain, routesInventory}