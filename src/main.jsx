import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './estilos/tiempoApp.css'
import { TiempoApp } from './TiempoApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TiempoApp />
  </StrictMode>,
)
