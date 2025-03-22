import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Root from './Components/Root/Root'
import Errorpage from './Components/Errorpage/Errorpage'
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard'
import Statistics from './Components/Statistics/Statistics';
import ProductDetails from './Components/ProductDetails/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'products/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/Products.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
