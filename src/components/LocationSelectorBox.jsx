import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const LocationWrapper = styled.div`
   position: absolute;
    width: 600px;
    height: 95vh;
    margin: 0 auto;
    padding: 10px 24px;
    background: var(--color-secondary);
    top: 20px;
    z-index: 9999;
`
const Div = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
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
`
const SelectLocationNavbar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SelectLocationTitle = styled.div`
    font-size: var(--text-lg);
    font-weight: var(--font-medium);
`
const SelectLocationDeleteCityBtn = styled.div`
    color: var(--color-accent);
    cursor: pointer;
`
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
`
const SelectLocationSearchBoxInput = styled.input`
    width: 95%;
    background-color: inherit;
    color: var(--color-info);

`
const SelectLocationSearchBoxIcon = styled.div`
    display: flex;
`
const SelectLocationList = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
const SelectLocationItem = styled.div`
    background-color: var(--color-accent);
`
const SelectCityList = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 12px 8px;
    overflow-y: scroll;
`
const SelectCityTitle = styled.div`
    margin: 16px;
    font-size: var(--text-lg);
    color: var(--color-accent);
`
const SelectCityItem = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 12px 16px;
    border-bottom: 1px solid var(--color-info);
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SelectCityItemLabel = styled.label`
    
`
const SelecCityItemInput = styled.input`
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: 1px solid var(--color-info);
  &:checked {
   accent-color: var(--color-accent);
  }
`
const LocationFooterBtns = styled.div`
    width: 100%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`
const LocationAccentBtn = styled.div`
    width: 40%;
    background-color: transparent;
    cursor: pointer;
    padding: 8px 16px;
    border: 1px solid var(--color-info);
    font-size: var(--text-lg);
`
const LocationCancelBtn = styled.div`
     width: 40%;
    background-color: var(--color-accent);
    cursor: pointer;
    padding: 8px 16px;
    font-size : var(--text-lg)
`
function LocationSelectorBox({isOpen , setIsOpen , CityList , setCityList}) {
  return (
    <Div>
         {/* onClick={() => setIsOpen(open => !open)} */}
     {isOpen ? <LocationWrapper>
              <SelectLocationHeader>
                <SelectLocationNavbar>
                    <SelectLocationTitle>انتخاب شهر</SelectLocationTitle>
                <SelectLocationDeleteCityBtn>حذف همه</SelectLocationDeleteCityBtn>
                </SelectLocationNavbar>
                <SelectLocationSearchBox>
                    <SelectLocationSearchBoxInput placeholder='جستجو در شهرها'/>
                   <SelectLocationSearchBoxIcon> <SearchOutlinedIcon /> </SelectLocationSearchBoxIcon>
                </SelectLocationSearchBox>
                <SelectLocationList>
                    <SelectLocationItem>حداقل یک شهر را انتخاب کنید.</SelectLocationItem>
                </SelectLocationList>
              </SelectLocationHeader>
       
              <SelectCityList>
                {CityList.provinces.map(citylist => (
              <>
                 <SelectCityTitle>{citylist.name}</SelectCityTitle>
                   {citylist.cities.map((city , index) => (
                 <SelectCityItem >
                     <SelectCityItemLabel htmlFor={city}>{city}</SelectCityItemLabel>
                    <SelecCityItemInput id={city} type='checkbox'></SelecCityItemInput>
                   
                </SelectCityItem>
                   ))}
              </>
                ))}
              </SelectCityList>

            <LocationFooterBtns>
                <LocationAccentBtn>انصراف</LocationAccentBtn>
                <LocationCancelBtn>تایید</LocationCancelBtn>
            </LocationFooterBtns>
     </LocationWrapper> : ''}
    </Div>
  )
}

export default LocationSelectorBox