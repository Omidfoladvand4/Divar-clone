import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";


const MobileNavbarWrapper = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    align-items: center;
    color: var(--color-info);
    background: var(--color-primary);
    display: none;
    z-index: 9999;
    @media (max-width: 960px) {
         display: flex;
    }
`
const MobileNavbarItem = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    padding: 6px 0;
    opacity: 0.8;
    font-size: var(--text-sm);
`
function MobileNavbar() {
  return (
    <MobileNavbarWrapper>
         <MobileNavbarItem><div>آگهی ها</div> <div><HomeIcon /></div> </MobileNavbarItem>
         <MobileNavbarItem><div> نشان ها</div> <div><BookmarkBorderIcon /></div> </MobileNavbarItem>
         <MobileNavbarItem><div> ثبت آگهی</div> <div><AddCircleOutlineOutlinedIcon /></div> </MobileNavbarItem>
         <MobileNavbarItem><div> چت و تماس</div> <div><ModeCommentOutlinedIcon /></div> </MobileNavbarItem>
         <MobileNavbarItem><div>دیوار من</div> <div><PermIdentityOutlinedIcon /></div> </MobileNavbarItem>
    </MobileNavbarWrapper>
  )
}

export default MobileNavbar