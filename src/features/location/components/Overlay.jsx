import styled from "styled-components";

const OverLay = styled.div`
width: 100vw;
height: 100vh;
background:  rgba(0,0,0,0.9);
opacity: .5;
position: fixed;
top: 0;
transition: all 0.3s ease;
z-index: 800;
`
function Overlay({isOpen , setIsOpen}) {
    return (
          <OverLay style={{display : isOpen ? 'block' : 'none'}} onClick={() => setIsOpen(open => !open)}/>
    )
}

export default Overlay
