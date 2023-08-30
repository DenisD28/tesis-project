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
import { Dashboard } from './pages/dashboard';
import { IngresoProductoTerminado } from './pages/IngresoProductoTerminado';
import { SalidaDeMateriaPrima } from './pages/SalidaDeMateriaPrima';

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
    path: "/dashboard",
    element: <Dashboard />
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
