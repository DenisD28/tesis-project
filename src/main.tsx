import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../src/css/index.css"
import LoginPage from '../src/pages/LoginPage';
import { Inventarios } from './pages/Inventarios';
import { IngresoProducto } from './pages/IngresoProducto';
import { Salir } from './Components/IniciarSesion/Salir';
import { Organizaciones } from './pages/Organizaciones';

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
    path: "/createProductos",
    element: <IngresoProducto />
  },
  {
    path: "/Organizaciones",
    element: <Organizaciones />
  },
  {
    path: "/logout",
    element: <Salir />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
