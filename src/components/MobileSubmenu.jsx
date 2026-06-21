import styled from "styled-components"
import  {categories} from "../services/menuData/menuIcons"
import { useState } from "react"
import { items } from "../services/menuData/menuItems"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const MoblieMenuWrapper = styled.div`
    display: none;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 100px;
    padding: 12px 8px;
    @media (max-width: 960px) {
        display: flex;
    } 
`
const MoblieMenuItem = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
`
const MoblieMenuItemTitle =styled.div`
    font-size: var(--text-xs);
    color: var(--color-info);
`
const MoblieMenuItemImage = styled.img`
    width: 35%;
    object-fit: cover;
`

const SubmenuWrapper = styled.div`
   position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 14px;
    bottom: 0;
    height: 80%;
    left: 0;
    z-index: 9998;
    overflow: scroll;
    background: var(--color-secondary);

`
const SubmenuHeader = styled.div`
    width:  100%;
   text-align: center;
    `
const SubmenuTitle = styled.div`
    font-size: var(--text-lg);
    `
const SubmenuCloseIcon = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: auto;

`
const SubmenuItemsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 12px;
    animation:  animate 0.3s ease;
    @keyframes animate {
        0%{
         transform  : translate(100%);
        }
          100%{
         transform  : translate(0);
            
        }
    }
`
const SubmenuItems = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 14px;
    padding: 6px 10px;
    background:var(--color-subtitle);
    border-radius: 8px;
    color: var(--color-info);
`
const SubmenuItemsIcon = styled.img`
    width: 40px;
    object-fit: cover;
`
const SubmenuItemsTitle = styled.div`
    
`
const SubmenuItemWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 14px;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: var(--color-secondary);
`
function MobileSubmenu() {
    const [isopenSubmenu , setIsopenSubmenu] = useState(false)
    const [submenuData, setSubmenuData] = useState([])
    const [submenuItems , setSubmenuItems] = useState([])
    const [isopenSubmenuItems , setIsopenSubmenuItems] = useState(false)
    const [submenuImage , setSubmenuImage] = useState()
    const MoblieNemuClicKHandler = (title) => {
           setIsopenSubmenu(true)
           
      const currentItems = items.filter((item) => item.title == title);
      setSubmenuImage(currentItems[0].image)
      
      
     setSubmenuData(currentItems)
     

    }
    const submenuItemsClickHandler = (title) => {
        const currentSubCategory = submenuData[0].subCategories.filter((item) =>  item.title == title)
        setIsopenSubmenuItems((open) => !open)
        setSubmenuItems(currentSubCategory)
    }
  return (
    <MoblieMenuWrapper>
         {categories.map((item , index) => (
             <MoblieMenuItem key={index} onClick={() => MoblieNemuClicKHandler(item.title)}>
             <MoblieMenuItemImage src={item.image} alt =''></MoblieMenuItemImage>
            <MoblieMenuItemTitle>{item.title}</MoblieMenuItemTitle>
        </MoblieMenuItem>
         ))}
    
        {isopenSubmenu && 
         <SubmenuWrapper>
            <SubmenuCloseIcon onClick={() => setIsopenSubmenu((open =>   !open) )}><CloseOutlinedIcon /></SubmenuCloseIcon>
            {submenuData.map((item) => (
                <SubmenuHeader key={item}>
                    <SubmenuTitle>{item.title}</SubmenuTitle>
                </SubmenuHeader>
            ))}

            <SubmenuItemsWrapper>
                {submenuData[0].subCategories.map((category , index) => (
                    <SubmenuItems key={index} onClick={() => submenuItemsClickHandler(category.title)}>
                    <SubmenuItemsIcon src={submenuImage}>
                    </SubmenuItemsIcon>
                    <SubmenuItemsTitle>{category.title}</SubmenuItemsTitle>
                    <ArrowBackIosIcon style={{marginRight : 'auto'}}/>
                </SubmenuItems>
                ))}
            </SubmenuItemsWrapper>
              <div>
                {isopenSubmenuItems && 
                <SubmenuItemWrapper>
                      <SubmenuCloseIcon onClick={() => setIsopenSubmenuItems((open =>   !open) )}><ArrowForwardIosIcon /></SubmenuCloseIcon>
                       {submenuItems.map((item) => (
                <SubmenuHeader key={item}>
                    <SubmenuTitle>{item.title}</SubmenuTitle>
                </SubmenuHeader>
            ))}
              <SubmenuItemsWrapper>
                {submenuItems[0].items.map((category , index) => (
                    <SubmenuItems key={index}>
                    <SubmenuItemsIcon src={submenuImage}>
                    </SubmenuItemsIcon>
                    <SubmenuItemsTitle>{category}</SubmenuItemsTitle>
                </SubmenuItems>
                ))}
            </SubmenuItemsWrapper>
                </SubmenuItemWrapper>
                }
              </div>
          </SubmenuWrapper>
        }
       
    </MoblieMenuWrapper>
  )
}

export default MobileSubmenu