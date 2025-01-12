import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './components/layout/MainLayout.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/errorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import ItemCard from './components/ItemsCard/ItemCard.jsx'
import ItemDetails from './components/ItemDetails/ItemDetails.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader: () => fetch('../Category.json'),
        children:[
          {
            path: "/",
            element: <ItemCard></ItemCard>,
            loader: () => fetch('../taqiyah.json')
          },
          {
            path: "/categoryIssue/:Items",
            element: <ItemCard></ItemCard>,
            loader: () => fetch('../taqiyah.json')
          }
        ]
      },
      {
        path:"item/:product_id",
        element:<ItemDetails></ItemDetails>,
        loader: () => fetch('/taqiyah.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
