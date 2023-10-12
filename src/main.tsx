import React from 'react';
import "../src/css/index.css"
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inventarios } from './pages/Inventarios/Inventarios';
import { IngresoInventarioMP } from './pages/Inventarios/IngresoInventarioMP';
import { Organizaciones } from './pages/Organizaciones/Organizaciones';
import { IngresoProductoTerminado } from './pages/Inventarios/IngresoProductoTerminado';
import { SalidaDeMateriaPrima } from './pages/Inventarios/SalidaDeMateriaPrima';
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
import { IngresoInventarioPT } from './pages/Inventarios/IngresoInventarioPT';
import { FormUsuarios } from './Components/Usuarios/FormUsuarios';
import { AddUsuarios } from './pages/Usuarios/AddUsuarios';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/inventario",
    element: <Inventarios />
  },
  {
    path: "/IngresoInventarioMP",
    element: <IngresoInventarioMP />
  },
  {
    path: "/IngresoInventarioPT",
    element: <IngresoInventarioPT />
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
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
