import styled from "styled-components"
const SubMenuWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 100%;
    z-index: 999;
    width: 100vw;
    background-color: red;
`
function SubMenu({visible}) {
    const handleClick = (e) => {
        e.stopPropagation()
    } 
  return (
     <> 
      {visible ?(
        <SubMenuWrapper onClick={handleClick}>
          {/* <Sidebar></Sidebar>
          <Main></Main> */}
          asjfdfl
    </SubMenuWrapper> ) : ''}
     </>
  )
}

export default SubMenu