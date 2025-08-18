import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Cart from './Components/Cart.jsx'
import Main from './Components/Main.jsx'

const appRoutes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"cart",
      element:<Cart/>
    },
    {
      path:"/",
      element:<Main/>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoutes}/>
  </StrictMode>,
)
