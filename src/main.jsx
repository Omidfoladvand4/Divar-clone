import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'
import { CityProvider } from './features/location/context/CityContext';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CityProvider>
         <App />
     </CityProvider>
  </StrictMode>,
)
