import styled from "styled-components"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import casbvakar from '../../../assets/footerImage/casbvakar.png';
import download from '../../../assets/footerImage/download.png';
import enamadd from '../../../assets/footerImage/enamad.png';

const SidebarFooterWrapper = styled.div`
    
`
const SidebarFooterItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 16px auto;
    gap: 10px;
`
const SidebarFooterItem = styled.div`
    color: var(--color-subtitle);
    font-size: var(--text-xs);
    transition: all 0.3s ease ;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        color: var(--color-info);
    };
    `
const SidebarLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`
const SidebarLink = styled.div`
    cursor: pointer;
    color: var(--color-subtitle);
    transition:  all 0.3s ease;
    &:hover{
        color: var(--color-info);
    }
`
const SidebarBottons = styled.div`
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SidebarBottonItem = styled.img`
    width: 33%;
    object-fit: contain;
    cursor: pointer;
`

function SidebarFooter() {

    return (
        <SidebarFooterWrapper>
            <SidebarFooterItems>
                <SidebarFooterItem>درباره دیوار</SidebarFooterItem>
                <SidebarFooterItem> دریافت برنامه </SidebarFooterItem>
                <SidebarFooterItem> اتاق خبر</SidebarFooterItem>
                <SidebarFooterItem> دیوار حرفه ای</SidebarFooterItem>
                <SidebarFooterItem>گزارش آسیب پذیری </SidebarFooterItem>
                <SidebarFooterItem>درگاه تامین کننده دیوار</SidebarFooterItem>
                <SidebarFooterItem> دیواری شو</SidebarFooterItem>
                <SidebarFooterItem> پشتیبانی و قوانین</SidebarFooterItem>
                
            </SidebarFooterItems>

            <SidebarLinks>
                   <SidebarLink><TwitterIcon /></SidebarLink>
                   <SidebarLink><InstagramIcon /></SidebarLink>
                   <SidebarLink><LinkedInIcon /></SidebarLink>
                  
            </SidebarLinks>
            <SidebarBottons>
                <SidebarBottonItem src={casbvakar}/>
                <SidebarBottonItem src={download}/>
                <SidebarBottonItem src={enamadd}/>
            </SidebarBottons>
        </SidebarFooterWrapper>
    )
}

export default SidebarFooter
