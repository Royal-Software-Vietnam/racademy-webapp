import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Landing from './screens/Landing'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  }, {
    path: "/",
    element: <Landing />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
