import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, } from 'react-router'
import Layout from './Layout.jsx'

import Home from './components/Home.jsx'
import SingleProduct from './components/SingleProduct.jsx'
import CartPage from './components/CartPage.jsx'
import CreateRecipe from './components/CreateRecipe.jsx'
import SuccessPage from './components/SuccessPage.jsx'


const route = createBrowserRouter([
  {
    path : "",
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },

      {
        path : "/:id" ,
        element : <SingleProduct/>
      },
      {
        path : "cart",
        element : <CartPage/>
      },

      {
        path : "createrecipe",
        element : <CreateRecipe/>
      },

      {
        path : "createrecipe/success",
        element  : <SuccessPage/>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
