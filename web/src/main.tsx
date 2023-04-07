import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './routes/route'
import { RouterProvider } from 'react-router-dom'
import './styles/common.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router={routes} />
  </React.StrictMode>,
)
