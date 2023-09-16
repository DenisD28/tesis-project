import React from 'react';
import "../src/css/index.css"
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inventarios } from './pages/Inventarios/Inventarios';
import { IngresoInventarioMP } from './pages/Inventarios/IngresoInventarioMP';
import { Salir } from './Components/IniciarSesion/Salir';
import { Organizaciones } from './pages/Organizaciones/Organizaciones';
import { IngresoProductoTerminado } from './pages/Inventarios/IngresoProductoTerminado';
import { SalidaDeMateriaPrima } from './pages/Inventarios/SalidaDeMateriaPrima';
import { AddNewProduct } from './pages/Productos/AddNewProduct';
import LoginPage from './pages/Login/LoginPage';
import Home from './pages/Home/Home';
import { Dashboard } from './pages/Dashboard';
import  Home from './pages/Home/Home';
import AddClient from './pages/Clients/AddClient';

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
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/AddNewClient",
    element: <AddClient />
  },
  {
    path: "/inventarioTP",
    element: <IngresoProductoTerminado />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
