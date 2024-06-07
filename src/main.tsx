import App from './App';
import React from 'react';
import "../src/css/index.css"
import ReactDOM from 'react-dom/client'
import AddSale from './pages/Sale/AddSale';
import { Dashboard } from './pages/Dashboard';
import LoginPage from './pages/Login/LoginPage';
import { Reports } from './pages/Reports/Reports';
import AddClient from './pages/Clients/AddClient';
import Purchases from './pages/Purchases/Purchases';
import { Clientes } from './pages/Clients/Clientes';
import { Usuarios } from './pages/Usuarios/Usuarios';
import ViewInfoUser from './pages/User/ViewInfoUser';
import AddPurchases from './pages/Purchases/AddPurchases';
import { AddUsuarios } from './pages/Usuarios/AddUsuarios';
import { Proveedores } from './pages/Proveedores/Proveedores';
import AddProveedores from './pages/Proveedores/AddProveedores';
import { AddNewProduct } from './pages/Productos/AddNewProduct';
import { createHashRouter, RouterProvider } from "react-router-dom";
import AddOrganizacion from './pages/Organizaciones/AddOrganizacion/AddOrganizacion';
import { Organizaciones } from './pages/Organizaciones/Organizaciones';
import ChangePassword from './pages/User/ChangePassword/ChangePassword';
import { Inventarios } from './pages/Inventarios/MateriaPrima/Lista/ListaMateriaPrima';
import EditOrganization from './pages/Organizaciones/EditOrganization/EditOrganization';
import { AddInventarioMP } from './pages/Inventarios/MateriaPrima/Ingreso/AddInventarioMP';
import { AddInventarioPT } from './pages/Inventarios/ProductoTerminado/Ingreso/AddInventarioPT';
import { SalidaDeMateriaPrima } from './pages/Inventarios/MateriaPrima/Salida/SalidaDeMateriaPrima';
import { IngresoProductoTerminado } from './pages/Inventarios/ProductoTerminado/Lista/ListaProductoTerminado';
import { TablasVentas } from './Components/TablasDatos/TablaVentas';
import { AddInventario } from './pages/Inventarios/IngresoV2/AddInventario';
import { TablasProductos } from './Components/TablasDatos/TablaProductos';

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
        path: "/addventas",
        element: <AddSale />
      },
      {
        path: "/ventas",
        element: <TablasVentas />
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
      {
        path: "/addinventary",
        element: <AddInventario />
      },
      {
        path: "/listproduct",
        element: <TablasProductos />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
