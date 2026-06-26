import styled from "styled-components"
import { categories } from "../services/menuData/menuIcons"
import { useEffect, useState } from "react"
import SidebarFooter from "./sidbar/SidebarFooter"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const SidebarWrapper = styled.div`
    position: fixed;
    width: 18%;
    height: 90%;
    top: 75px;
    right: 0;
    padding: 10px 12px;
    gap: 24px;
    overflow: scroll;
    @media (max-width: 1024px) {
       display: none;
    }
`
const SidebarCategory = styled.div`
    width: 100%;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   gap: 6px;
   margin: 16px;
   flex-direction: column;
   border-bottom: 1px solid var(--color-subtitle);
`
const SidebarFilters = styled.div`
width: 100%;
margin: 16px;
   border-bottom: 1px solid var(--color-subtitle);

`
const SidebarItem = styled.div`
display: flex;
font-size: var(--text-sm);
color: var(--color-subtitle);
cursor: pointer;
transition: all .3s ease;
&:hover {
    color: var(--color-info);
}
`
    
const SibarItemTitle = styled.div`
    
`
const SidebarItemIcon = styled.div`
margin-left: 6px;
    
`
const PriceFilter = styled.div`
width: 100%;
display: flex;
align-items: start;
flex-direction : column;
gap: 6px;
padding-bottom: 24px;
border-bottom: 1px solid var(--color-subtitle);
`
const PriceFilterTitle = styled.div`
    
`
const FormSection = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 80%;
`
const InputForm = styled.input`
    width: 100%;
    background: transparent;
    border: 1px solid var(--color-subtitle);
    padding: 8px 8px;
    transition: all 0.3s ease;
    border-radius: 4px;
    color: var(--color-info);
    
    &:focus{
        border: 1px solid var(--color-accent);
    }
    &::placeholder{
        color: var(--color-accent)
        
    }
`
const ToSection = styled.div`
   display :flex ;
   margin-top: 14px;
    width: 80%;
     align-items: center;
    gap: 10px;

`
const InputTo = styled.input` 
    width: 100%;
    background: transparent;
    border: 1px solid var(--color-subtitle);
    padding: 8px 8px;
    transition: all 0.3s ease;
    color: var(--color-info);
    border-radius: 4px;
    &:focus{
        border: 1px solid var(--color-accent);
    }
    &::placeholder{
        color: var(--color-accent)
        
    }
`
const ImageFilter = styled.div`
    width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   user-select: none;
   cursor: pointer;
   padding: 16px 0;
   border-bottom: 1px solid var(--color-subtitle);
`
const FilterLabel = styled.div`
`
const FilterRecentAds = styled.div`
     width: 100%;
     padding: 16px 0;
     display: flex;
     flex-direction: column;
     gap: 16px;
`
const FilterRecentAdsTitle = styled.div`
    
`
const FilterRecentSelect = styled.select`
width: 80%;
background: var(--color-primary);
border: 1px solid var(--color-subtitle);
color: var(--color-info);
padding: 8px 12px;
cursor: pointer;
`
const FilterSelectOption = styled.option`

&:checked{
    color: var(--color-accent);
}  
`
const InputImageFilter = styled.div`
  width: 44px;
  height: 24px;
  background: ${({ $isActive }) => 
    $isActive ? 'var(--color-accent)' : 'var(--color-secondary)'
  };
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 2px;
  margin-left: 18px;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const Span = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--color-info);
  transition: all 0.5s ease;
  box-shadow: ${(props) => {
    if(props.$isActive) {
      return  '0 2px 20px var(--color-accent)'
    }else{
         return  '0 2px 20px var(--color-info)'
    }
  }};
 
  transform: ${(props) => {
    if (props.$isActive) {
      return 'translateX(-100%)';
    } else {
      return 'translateX(0px)';
    }
  }};
`;
const SidebarExtentions = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
   padding : 16px 0 ;

`
const SidebarExtentionsLabel = styled.div`
   
`
const SidebarExtentionsStatus = styled.div`
   color: var(--color-subtitle);
   display: flex;
`

function Sidebar({posts = [] , onFilterChange}) {
  const [hasImage, setHasImage] = useState(true);
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [recentAds, setRecentAds] = useState('');


  const applyFilters = () => {
    let filtred = [...posts] 

    if(hasImage) {
      filtred = filtred.filter((item) => item.hasPhoto === true)
    }
     if (priceMin !== '') {
      filtred = filtred.filter(item => item.price >= Number(priceMin));
    }

     if (priceMax !== '') {
      filtred = filtred.filter(item => item.price <= Number(priceMax));
    }
     if (recentAds !== '') {
      const now = new Date();
      const hoursMap = {
        '3-hour': 3,
        '12-hour': 12,
        '1-day': 24,
        '3-day': 72,
        '7-day': 168,
      };
      const hours = hoursMap[recentAds];
      if (hours) {
        const limitDate = new Date(now.getTime() - hours * 60 * 60 * 1000);
        filtred = filtred.filter(item => 
          new Date(item.date) >= limitDate
        );
      }
    }

      if (onFilterChange) {
      onFilterChange(filtred);
    }
  };
    const handleImageToggle = () => {
    setHasImage(prev => !prev);
  };

  const handlePriceChange = (type, value) => {
    if (type === 'min') {
      setPriceMin(value);
    } else {
      setPriceMax(value);
    }
  };
   const handleRecentChange = (e) => {
    setRecentAds(e.target.value);
  };
   useEffect(() => {
    applyFilters();
  }, [hasImage, priceMin, priceMax, recentAds, posts]);
  return (
    <SidebarWrapper>
        <SidebarCategory>
             {categories.map((item) => (
            <SidebarItem key={item.title}>
                <SidebarItemIcon>{< item.icon />}</SidebarItemIcon>
                <SibarItemTitle>{item.title}</SibarItemTitle>
            </SidebarItem>
             ))}
        </SidebarCategory>
        <SidebarFilters>
          <PriceFilter >
            <PriceFilterTitle>قیمت (تومان)</PriceFilterTitle>
            <FormSection  >
                <div>از</div>
                <InputForm placeholder="تومان" 
                   value={priceMin}
                   onChange={(e) => handlePriceChange('min', e.target.value)}
                   type="number"
                ></InputForm>
            </FormSection>

            <ToSection >
                <div>تا</div>
                <InputTo placeholder="تومان"
                 value={priceMax}
                 onChange={(e) => handlePriceChange('max', e.target.value)}
                 type="number"
                ></InputTo>
            </ToSection>
          </PriceFilter>

          <ImageFilter onClick={() => handleImageToggle(posts)}>
            <FilterLabel>عکس دار</FilterLabel>
            <InputImageFilter $isActive={hasImage}>
                    <Span $isActive={hasImage}></Span>
            </InputImageFilter>
          </ImageFilter>
          <FilterRecentAds>
            <FilterRecentAdsTitle>زمان انتشار آگهی</FilterRecentAdsTitle>
            <FilterRecentSelect value={recentAds} onChange={handleRecentChange}>
                <FilterSelectOption value='3-hour'>3 ساعت پیش</FilterSelectOption>
                <FilterSelectOption value='12-hour'>12 ساعت پیش</FilterSelectOption>
                <FilterSelectOption value='1-day'>1روز پیش</FilterSelectOption>
                <FilterSelectOption value='3-day'>3روز پیش</FilterSelectOption>
                <FilterSelectOption value='7-day'>7روز پیش</FilterSelectOption>
            </FilterRecentSelect>
          </FilterRecentAds>
        </SidebarFilters>
        <SidebarExtentions>
          <SidebarExtentionsLabel>افزونه ها</SidebarExtentionsLabel>
          <SidebarExtentionsStatus>انتخاب  <ArrowBackIosIcon /> </SidebarExtentionsStatus>
        </SidebarExtentions>
        <SidebarFooter />
    </SidebarWrapper>
  )
}

export default Sidebar