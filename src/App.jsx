import AppRoutes from "./app/router";
import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';
const AppWrapper = styled.div`
`
function App() {


  return (
    <HashRouter>
    <AppWrapper>

    <AppRoutes />
    </AppWrapper>
    </HashRouter>
  )
}

export default App
