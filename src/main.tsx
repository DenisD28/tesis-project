import React from 'react';
import "../src/css/index.css"
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Inventarios } from './pages/Inventarios/MateriaPrima/Lista/ListaMateriaPrima';
import { Organizaciones } from './pages/Organizaciones/Organizaciones';
import { IngresoProductoTerminado } from './pages/Inventarios/ProductoTerminado/Lista/ListaProductoTerminado';
import { SalidaDeMateriaPrima } from './pages/Inventarios/MateriaPrima/Salida/SalidaDeMateriaPrima';
import { AddNewProduct } from './pages/Productos/AddNewProduct';
import LoginPage from './pages/Login/LoginPage';
import { Dashboard } from './pages/Dashboard';
import AddClient from './pages/Clients/AddClient';
import AddOrganizacion from './pages/Organizaciones/AddOrganizacion';
import AddProveedores from './pages/Proveedores/AddProveedores';
import { Usuarios } from './pages/Usuarios/Usuarios';
import Purchases from './pages/Purchases/Purchases';
import AddPurchases from './pages/Purchases/AddPurchases';
import { Clientes } from './pages/Clients/Clientes';
import { Proveedores } from './pages/Proveedores/Proveedores';
import { AddUsuarios } from './pages/Usuarios/AddUsuarios';
import App from './App';
import AddSale from './pages/Sale/AddSale';
import { Reports } from './pages/Reports/Reports';
import ViewInfoUser from './pages/User/ViewInfoUser';
import ChangePassword from './pages/User/ChangePassword/ChangePassword';
import EditOrganization from './pages/Organizaciones/EditOrganization/EditOrganization';
import { AddInventarioMP } from './pages/Inventarios/MateriaPrima/Ingreso/AddInventarioMP';
import { AddInventarioPT } from './pages/Inventarios/ProductoTerminado/Ingreso/AddInventarioPT';

const router = createHashRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/inventario",
        element: <Inventarios />
      },
      {
        path: "/IngresoInventarioMP",
        element: <AddInventarioMP />
      },
      {
        path: "/IngresoInventarioPT",
        element: <AddInventarioPT />
      },
      {
        path: "/Organizaciones",
        element: <Organizaciones />
      },
      {
        path: "/pTerminado",
        element: <IngresoProductoTerminado />
      },
      {
        path: "/ingresoProducto",
        element: <SalidaDeMateriaPrima />
      },
      {
        path: "/AddNewProduct",
        element: <AddNewProduct />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/AddNewClient",
        element: <AddClient />
      },
      {
        path: "/inventarioTP",
        element: <IngresoProductoTerminado />
      },
      {
        path: "/clientes",
        element: <Clientes />
      },
      {
        path: "/addcliente",
        element: <AddClient />
      },
      {
        path: "/addorganizacion",
        element: <AddOrganizacion />
      },
      {
        path: "/proveedores",
        element: <Proveedores />
      },
      {
        path: "/addproveedores",
        element: <AddProveedores />
      },
      {
        path: "/usuarios",
        element: <Usuarios />
      },
      {
        path: "/addusuarios",
        element: <AddUsuarios />
      },
      {
        path: "/compras",
        element: <Purchases />
      },
      {
        path: "/addcompras",
        element: <AddPurchases />
      },
      {
        path: "/ventas",
        element: <AddSale />
      },
      {
        path: "/reportes",
        element: <Reports />
      },
      {
        path: "/account/edit",
        element: <ViewInfoUser />
      },
      {
        path: "/account/change-password",
        element: <ChangePassword />
      },
      {
        path: "/organization/edit",
        element: <EditOrganization />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
