import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../src/css/index.css"
import { Inventarios } from './Components/pages/Inventarios';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inventarios />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
