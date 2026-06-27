import styled from "styled-components"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { categories } from "../services/menuData/menuIcons";
import { items } from "../services/menuData/menuItems";
import { useState } from "react";
const SubMenuWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 100%;
    z-index: 999;
    width: 75vw;
    background  : var(--color-secondary) ;
  box-shadow: 0px 0px 16px var(--color-subtitle) ;
    padding: 16px 14px;
    gap: 10px;
    animation:  animate .5s ease;
    @keyframes animate {
       0% {
          opacity: 0;
       }
       100%{
          opacity: 1;
       }
    }

    @media (max-width: 1280px ) {
      display: none;
    }
`
const SidebarWrapper = styled.div`
   width: 230px;
   border-left : 1px solid black;
   padding: 14px 8px;
   display: flex;
   align-items: flex-start;
   gap: 10px;
   flex-direction: column;

`
const Sidebar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  padding: 4px 6px;
  &:hover{
    background-color: var(--color-primary);
  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`
const SidebarItem = styled.div`
  
`
const SidebarIcon = styled.div`
  
`
const SidebarItemIcon = styled.div`
`
const SidebarItemTitle = styled.div`
  
`
const Main =styled.div`
  flex-grow: 1;
  display: flex;
  `
const  SubmenuGroups  = styled.div` 
   width: 70%;
   height: 80vh;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   padding: 10px 16px;
   overflow: scroll;
`

const  SubmenuGroup  = styled.div`
  display: flex;
  text-align: right;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 16px;
  transition:  color 0.3s ease;
  &:hover{
    color: var(--color-accent);
  }
  `
const  SubmenuItem  = styled.div`
   display: flex;
   font-size: var(--text-xs);
   color: var(--color-subtitle);
  transition:  color 0.3s ease;
     &:hover{
    color: var(--color-accent);
  }
   `
const  SubmenuAside  = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  padding: 16px 0;
`
const  SubmenuImage  = styled.img`
  width: 300px;
  object-fit: cover;
`
const  SubmenuLink  = styled.div`
  
`
function SubMenu({visible}) {
 const [subMenuItemFiltred , setSubmenuItemFiltred] = useState([])
 const handleClick = (e) => {
        e.stopPropagation()
        
    } 
    const sidebarClickHandler = (id) => {
      const filterd = items.filter((item) => item.id ===  id)
      setSubmenuItemFiltred(filterd)
      console.log(subMenuItemFiltred);
      
      
      
    }
  return (
     <> 
      {visible ?(
        <SubMenuWrapper onClick={handleClick}>
          <SidebarWrapper>
               
         <>
      {categories.map((item) => (
        <Sidebar key={item.id} onClick={() => sidebarClickHandler(item.id)}>
          <SidebarItem>
            <SidebarItemIcon>
              <item.icon /> 
            </SidebarItemIcon>
            <SidebarItemTitle>{item.title}</SidebarItemTitle>
          </SidebarItem>
          <SidebarIcon>
            <ArrowBackIosIcon />
          </SidebarIcon>
        </Sidebar>
      ))}
    </>
              
              
          </SidebarWrapper>
        <Main>
 
    <>
  {subMenuItemFiltred.map((item, index) => (
    <SubmenuGroups key={item.id || index}>
      {item.subCategories?.map((sub) => (
        <SubmenuGroup key={sub.id}>{sub.title}
         {sub.items.map((item , index) => {
        return   <SubmenuItem key={index}>{item}</SubmenuItem>
         })}
        </SubmenuGroup>
      ))}
    </SubmenuGroups>
  ))}
</>
 
  
  <SubmenuAside>
     {subMenuItemFiltred.map((item ) => (
      <>
       <SubmenuImage src={item.image}/>
      <SubmenuLink>مشاهده همه {item.title}</SubmenuLink>
      </>
     ))}
  </SubmenuAside>
</Main>
    </SubMenuWrapper> ) : ''}
     </>
  )
}

export default SubMenu