import './App.css'
import AppRoutes from "./routes";
import { HashRouter } from 'react-router-dom';
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

  return (
    <HashRouter>
      <Navbar />
    <AppWrapper>

    <AppRoutes />
    </AppWrapper>
    </HashRouter>
  )
}

export default App
