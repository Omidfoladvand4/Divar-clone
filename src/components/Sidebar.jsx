import styled from "styled-components"
import { categories } from "../services/menuData/menuIcons"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useCity } from "../context/Cities"
const SidebarWrapper = styled.div`
    position: fixed;
    width: 22%;
    height: 90%;
    top: 75px;
    right: 0;
    overflow: scroll;
    @media (max-width: 800px) {
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
   padding-bottom: 24px;
   flex-direction: column;
   border-bottom: 1px solid var(--color-subtitle);
`
const SidebarFilters = styled.div`
width: 100%;
margin: 16px;
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
border-bottom: 1px solid var(--color-info);
`
const PriceFilterTitle = styled.div`
    
`
const FormSection = styled.div`
    display: flex;
    width: 80%;
`
const InputForm = styled.input`
    width: 100%;
    background: transparent;
    border: 1px solid var(--color-info);
    padding: 8px 8px;
    transition: all 0.3s ease;
    border-radius: 4px;
    color: var(--color-info);
    &:focus{
        border: 1px solid var(--color-accent);
    }
    &::placeholder{
        color: red;
        
    }
`
const ToSection = styled.div`
   display :flex ;
   margin-top: 14px;
    width: 80%;

`
const InputTo = styled.input` 
    width: 100%;
    background: transparent;
    border: 1px solid var(--color-info);
    padding: 8px 8px;
    transition: all 0.3s ease;
    color: var(--color-info);
    border-radius: 4px;
    &:focus{
        border: 1px solid var(--color-accent);
    }
    &::placeholder{
        color: red;
        
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
   border-bottom: 1px solid var(--color-info);
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
border: 1px solid var(--color-info);
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
function Sidebar() {
    const location = useLocation()
    const navigate = useNavigate()
    const params = new URLSearchParams(location.search)
  const {city} = useCity()
  const [hasImage, setHasImage] = useState(params.get('has-photo') === 'true');
  const [priceMin, setPriceMin] = useState(params.get('priceMin') || '');
  const [priceMax, setPriceMax] = useState(params.get('priceMax') || '');
  const [recentAds, setRecentAds] = useState(params.get('recent_ads') || '3-hour');

   const updateURL = (newParams) => {
    const searchParams = new URLSearchParams(location.search);
    
    Object.keys(newParams).forEach(key => {
      const value = newParams[key];
      if (value && value !== '') {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });
    
    const queryString = searchParams.toString();
    navigate(`/s/${queryString ? `?${queryString}` : ''}`, { replace: true });
  };
  const handleImageToggle = () => {
    const newValue = !hasImage;
    setHasImage(newValue);
    updateURL({ 'has-photo': newValue ? 'true' : '' });
  };

   const handlePriceChange = (type, value) => {
    if (type === 'min') {
      setPriceMin(value);
      updateURL({ 'priceMin': value, 'priceMax': priceMax });
    } else {
      setPriceMax(value);
      updateURL({ 'priceMin': priceMin, 'priceMax': value });
    }
  };
    const handleRecentChange = (e) => {
    const value = e.target.value;
    setRecentAds(value);
    updateURL({ 'recent_ads': value });
  };
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

          <ImageFilter onClick={() => handleImageToggle()}>
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
    </SidebarWrapper>
  )
}

export default Sidebar