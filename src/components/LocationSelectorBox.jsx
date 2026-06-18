import  { useState } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from "react-router-dom";
import { useCity } from "../context/Cities";
const LocationWrapper = styled.div`
  position: fixed;
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  padding: 10px 24px;
  background: var(--color-secondary);
  box-shadow: 0px 0px 16px var(--color-subtitle) ,
   0px 0px 24px var(--color-info);

  top: 0;
  z-index: 9999;
  animation: animate 0.5s ease;
  @keyframes animate {
    0% {
      opacity: 0;
      transform: translate(0, -100%);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @media (max-width: 480px) {
      width: 100vw;
      padding: 0 10px;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const OverLay = styled.div`
width: 100vw;
height: 100vh;
background:  rgba(0,0,0,0.9);
opacity: .5;
position: fixed;
top: 0;
transition: all 0.3s ease;
`
const SelectLocationHeader = styled.div`
  width: 100%;
  height: 28%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-info);
`;
const SelectLocationNavbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SelectLocationTitle = styled.div`
  font-size: var(--text-lg);
  font-weight: var(--font-medium);
`;
const SelectLocationDeleteCityBtn = styled.div`
  color: var(--color-accent);
  cursor: pointer;
`;
const SelectLocationSearchBox = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-info);
  padding: 10px 6px;
  margin: 0 auto;
  &:focus-within {
    border-color: var(--color-accent);
  }
`;
const SelectLocationSearchBoxInput = styled.input`
  width: 95%;
  background-color: inherit;
  color: var(--color-info);
`;
const SelectLocationSearchBoxIcon = styled.div`
  display: flex;
`;
const SelectedListWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
 gap: 3px;
 overflow: scroll;
   ::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
  ::-webkit-scrollbar-track , ::-webkit-scrollbar-thumb , ::-webkit-scrollbar-thumb:hover {
    background-color: transparent !important;
  }
`
const SelectedCityItem = styled.div`
    width: 20%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 2px;
    cursor: pointer;
    font-size: var(--text-xs);
   border: 1px solid var(--color-accent);
   color: var(--color-accent);
   border-radius: 25px;
   padding: 10px;
`
const SelectLocationList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const SelectLocationItem = styled.div`
 
`;
const SelectCityList = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 12px 8px;
  overflow-y: scroll;
`;
const SelectCityTitle = styled.div`
  margin: 16px;
  font-size: var(--text-lg);
  color: var(--color-accent);
`;
const SelectCityItem = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-info);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SelectCityItemLabel = styled.label``;
const SelecCityItemInput = styled.input`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid var(--color-info);
  &:checked {
    accent-color: var(--color-accent);
  }
`;
const LocationFooterBtns = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  `;
const LocationAccentBtn = styled.button`
  width: 40%;
  background-color: transparent;
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid var(--color-info);
  color: var(--color-info);
font-size: var(--text-base);

`;
const LocationCancelBtn = styled.button`
  width: 40%;
  color: var(--color-info);
  cursor: pointer;
  padding: 8px 16px;
font-size: var(--text-base);
transition : all .3s ease ; 

`;
function LocationSelectorBox({ isOpen, setIsOpen, CityList  , selected , setSelected}) {
    const {city , setCity} = useCity()
    const [inputFocus , setInputFocus] = useState(false)
    const [inputValue , setInputValue] = useState('')
    const [filteredProvinces, setFilteredProvinces] = useState([]);
    const navigate = useNavigate()
    function userSelectCityHandler(city) {
      
        setSelected(prevSelected => {
            if(prevSelected.includes(city)) {
                return prevSelected.filter(item => item !== city)
            }else {
                return[...prevSelected , city]
                
            }
        })
        
       
    }
const userSearchHandler = (e) => {
  const value = e.target.value;
  setInputValue(value);
  
  if (!CityList?.provinces) return;
  

    const filtered = CityList.provinces
      .map((province) => ({
        ...province,
        cities: province.cities.filter((city) =>
          city.toLowerCase().includes(value.toLowerCase())
        )
      }))
      .filter((province) => province.cities.length > 0);
    
      setFilteredProvinces(filtered);
};
const cancelHandler = () => {
    setIsOpen(false)
    setInputValue('')
    setSelected([])
}
const ChangeCityHandler = () => {
     setIsOpen(false)
     setCity([...selected])
     console.log('cities in context ' , city);
     
     navigate(`/s/${selected}`)
    
}
  return (
    <Div>
       <OverLay style={{display : isOpen ? 'block' : 'none'}} onClick={() => setIsOpen(open => !open)}/>
      {isOpen ? (
        <LocationWrapper>
          <SelectLocationHeader>
            <SelectLocationNavbar>
              <SelectLocationTitle>انتخاب شهر</SelectLocationTitle>
              <SelectLocationDeleteCityBtn onClick={() => setSelected([])}>حذف همه</SelectLocationDeleteCityBtn>
            </SelectLocationNavbar>
            <SelectLocationSearchBox>
              <SelectLocationSearchBoxInput
              onChange={ userSearchHandler}
              value={inputValue}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
               placeholder="جستجو در شهرها" />
              <SelectLocationSearchBoxIcon>
                {" "}
                {inputFocus ? <CloseOutlinedIcon/> :   <SearchOutlinedIcon />}
                 {" "}
              </SelectLocationSearchBoxIcon>
            </SelectLocationSearchBox>
            <SelectLocationList>
              {selected.length == 0 ?
               <SelectLocationItem>
                حداقل یک شهر را انتخاب کنید.
              </SelectLocationItem>
               :  <SelectedListWrapper>
                    {selected.map((item) => (
                        <SelectedCityItem key={item}>{item} <CloseOutlinedIcon onClick={() => userSelectCityHandler(item)}/> </SelectedCityItem>
                    ))}
               </SelectedListWrapper>
               }
            </SelectLocationList>
          </SelectLocationHeader>

          <SelectCityList>
            {filteredProvinces.map((province , index) => (
              <>
                <SelectCityTitle key={province + index}>{province.name}</SelectCityTitle>
                {province.cities.map((cityItem, index) => (
                  <SelectCityItem key={cityItem + index}  onClick={() => userSelectCityHandler(cityItem)}>
                    <SelectCityItemLabel htmlFor={cityItem}>
                      {cityItem}
                    </SelectCityItemLabel>
                    <SelecCityItemInput 
                      onChange={() => userSelectCityHandler(cityItem)}
                      id={cityItem}
                     checked = {selected.includes(cityItem)}
                      type="checkbox"></SelecCityItemInput>
                  </SelectCityItem>
                ))}
              </>
            ))}
          </SelectCityList>

          <LocationFooterBtns>
            <LocationAccentBtn onClick={cancelHandler}>
              انصراف
            </LocationAccentBtn>
            <LocationCancelBtn 
            onClick={ChangeCityHandler}
    disabled={selected.length === 0}
  style={{
     opacity: selected.length === 0 ? 0.5 : 1,
      cursor: selected.length === 0 ? 'not-allowed' : 'pointer',
      background:selected.length === 0 ? 'var(--color-primary)' : 'var(--color-accent)',
  }}
            >تایید</LocationCancelBtn>
          </LocationFooterBtns>
        </LocationWrapper>
      ) : (
        ""
      )}
    </Div>
  );
}

export default LocationSelectorBox;
