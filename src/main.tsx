import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "../src/css/index.css"
import { Inventarios } from './pages/Inventarios/Inventarios';
import { IngresoInventarioMP } from './pages/Inventarios/IngresoInventarioMP';
import { Salir } from './Components/IniciarSesion/Salir';
import { Organizaciones } from './pages/Organizaciones/Organizaciones';
import { IngresoProductoTerminado } from './pages/Inventarios/IngresoProductoTerminado';
import { SalidaDeMateriaPrima } from './pages/Inventarios/SalidaDeMateriaPrima';
import React from 'react';
import { AddNewProduct } from './pages/Productos/AddNewProduct';
import LoginPage from './pages/Login/LoginPage';
import { Aside } from './routes/aside';

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
    path: "/Organizaciones",
    element: <Organizaciones />
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />
  // },
  {
    path: "/pTerminado",
    element: <IngresoProductoTerminado />
  },
  {
    path: "/ingresoProducto",
    element: <SalidaDeMateriaPrima />
  },
  {
    path: "/logout",
    element: <Salir />
  },
  {
    path: "/AddNewProduct",
    element: <AddNewProduct />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
