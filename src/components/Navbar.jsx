import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { citiesData } from "../services/citiesData";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import LocationSelectorBox from "./LocationSelectorBox";
const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 12px;
  box-shadow: 0px 1px 2px var(--color-info);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const NavTitle = styled.div``;
const LinkItem = styled(Link)`
  color: var(--color-accent);
  font-weight: var(--font-bold);
  font-size: var(--text-xl);
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  opacity: 0.65;
  color: var(--color-info);
  transition: all 0.3s ease;
  padding: 12px 8px;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  &:hover {
    background: var(--color-secondary);
    opacity: 1;
  }
`;
const NavCityFilter = styled.div``;
const LocIcon = styled(NavItem)``;
const CurrentLocation = styled.div``;
const NavCategoryFilter = styled(NavItem)``;
const CategoryItem = styled.div``;
const NavSearchBox = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  background: var(--color-secondary);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;
const NavSearchBoxInput = styled.input`
  width: 95%;
  padding: 12px;
  background-color: inherit;
  color: var(--color-info);
`;
const NavSearchBoxIcon = styled.div`
  display: flex;
`;
const NavAccount = styled(NavItem)``;
const NavAccountitem = styled.div``;
const NavChat = styled(NavItem)``;
const NavChatItem = styled.div``;
const NavHelp = styled(NavItem)``;
const NavHelpItem = styled.div``;
const AddPostBtn = styled.div`
  background-color: var(--color-accent);
  color: var(--color-primary);
  border-radius: 4px;
  padding: 10px 16px;
  cursor: pointer;
`;

function Navbar() {
  const [isOpenSelectLoc, setIsopenSelectLoc] = useState(false);
  const [cityData, setCityData] = useState(citiesData);
  const [selectedCity, setSelectedCity] = useState([]);
  const [inputFocus , setInputFocus] = useState(false)
  return (
    <>
      <NavbarWrapper>
        <NavTitle>
          <LinkItem to={"/"}>دیوار</LinkItem>
        </NavTitle>
        <NavCityFilter>
          <LocIcon onClick={() => setIsopenSelectLoc((open) => !open)}>
            <RoomOutlinedIcon />
          <CurrentLocation>
  {selectedCity.length === 0 ? 'کل ایران' : 
   selectedCity.length === 1 ? selectedCity[0] : 
   `${selectedCity.length} شهر`}
</CurrentLocation>
          </LocIcon>
        </NavCityFilter>
        <NavCategoryFilter>
          <CategoryItem>دسته ها</CategoryItem>
          <KeyboardArrowDownOutlinedIcon />
        </NavCategoryFilter>
        <NavSearchBox>
          <NavSearchBoxInput placeholder="جستجو در همه اگهی ها" 
             onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
          />
          <NavSearchBoxIcon>
           {inputFocus ? <CloseOutlinedIcon/> :   <SearchOutlinedIcon />}
          </NavSearchBoxIcon>
        </NavSearchBox>
        <NavAccount>
          <PermIdentityOutlinedIcon />
          <NavAccountitem>دیوار من</NavAccountitem>
        </NavAccount>
        <NavChat>
          <ModeCommentOutlinedIcon />
          <NavChatItem>چت و تماس </NavChatItem>
        </NavChat>
        <NavHelp>
          <SupportOutlinedIcon />
          <NavHelpItem>پشتیبانی</NavHelpItem>
        </NavHelp>
        <AddPostBtn>ثبت آگهی</AddPostBtn>
      </NavbarWrapper>
      <LocationSelectorBox
        isOpen={isOpenSelectLoc}
        setIsOpen={setIsopenSelectLoc}
        CityList={cityData}
        setCityList={setCityData}
        selected={selectedCity}
        setSelected={setSelectedCity}
      />
    </>
  );
}

export default Navbar;
