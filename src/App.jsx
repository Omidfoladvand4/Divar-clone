import AppRoutes from "./routes";
import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import MobileSubmenu from './components/MobileSubmenu';
const AppWrapper = styled.div`
`
function App() {


  return (
    <HashRouter>
    <AppWrapper>
      <Navbar />
      <MobileSubmenu />

    <AppRoutes />
    </AppWrapper>
    </HashRouter>
  )
}

export default App
