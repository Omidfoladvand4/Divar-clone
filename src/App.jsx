import { useState } from 'react'
import './App.css'
import AppRoutes from "./routes";
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
const AppWrapper = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
    <AppWrapper>

    <AppRoutes />
    </AppWrapper>
    </BrowserRouter>
  )
}

export default App
