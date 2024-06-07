import {
    LayoutDashboard,
    Building2,
    User2,
    Users2,
    Truck,
    AreaChart
} from 'lucide-react';
import { MdOutlineShoppingBag } from 'react-icons/md'
import { LiaMoneyBillSolid } from 'react-icons/lia'

interface Route {
    path: string,
    title: string,
    icon: JSX.Element,
    type: string
}

//Tipos
//tipo4 = varios
//tipo1 = administrador general
//tipo2 = administrador
//tipo3 = colaborador

const routesMain: Route[] = [
    {
        "path": "/dashboard",
        "title": "Panel principal",
        "icon": <LayoutDashboard />,
        "type": "tipo4"
    },
    {
        "path": "/organizaciones",
        "title": "Organización",
        "icon": <Building2 />,
        "type": "tipo1"
    },
    {
        "path": "/usuarios",
        "title": "Usuarios",
        "icon": <User2 />,
        "type": "tipo4"
    },
    {
        "path": "/proveedores",
        "title": "Proveedores",
        "icon": <Truck />,
        "type": "tipo2"
    },
    {
        "path": "/clientes",
        "title": "Clientes",
        "icon": <Users2 />,
        "type": "tipo2"
    },
    {
        "path": "/compras",
        "title": "Compras",
        "icon": <MdOutlineShoppingBag className="w-6 h-auto" />,
        "type": "tipo2"
    },
    {
        "path": "/ventas",
        "title": "Ventas",
        "icon": <LiaMoneyBillSolid className="w-6 h-auto" />,
        "type": "tipo2"
    },
    {
        "path": "/reportes",
        "title": "Reportes",
        "icon": <AreaChart />,
        "type": "tipo2"
    },
]

const routesInventory: Route[] = [
    {
        "path": "/addinventary",
        "title": "Registro de Inventario",
        "icon": <LiaMoneyBillSolid className="w-6 h-auto" />,
        "type": "tipo2"
    },
    {
        "path": "/inventario",
        "title": "Materia prima",
        "icon": <LiaMoneyBillSolid className="w-6 h-auto" />,
        "type": "tipo2"
    },
    {
        "path": "/pTerminado",
        "title": "Producto Terminado",
        "icon": <LiaMoneyBillSolid className="w-6 h-auto" />,
        "type": "tipo2"
    },
    {
        "path": "/AddNewProduct",
        "title": "Nuevos productos",
        "icon": <LiaMoneyBillSolid className="w-6 h-auto" />,
        "type": "tipo4"
    },
]

export { routesMain, routesInventory }