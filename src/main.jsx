import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routers/Router'
import { AuthProvider } from './Contexts/AuthProvider'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <ToastContainer></ToastContainer>
<RouterProvider router={router}></RouterProvider>
 </AuthProvider>


  </StrictMode>,
)
