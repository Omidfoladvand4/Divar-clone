import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { adsData } from "../services/fakePosts";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Slider from '../components/Slider'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";


import "dayjs/locale/fa";
dayjs.extend(relativeTime);
dayjs.locale("fa");
const VisitPostWrapper = styled.div`
  width: 80%;
  margin: 80px auto;
  @media (max-width: 480px) {
     width: 100%;
     margin: 12px auto;
  }
`;
const NavbarWrapper = styled.div`
`
const VisitPostContentWrapper = styled.div`
  display: flex;
  padding: 20px 35px;
  gap: 12px;
  flex-wrap: wrap;
  @media (max-width: 480px) {
      flex-direction: column-reverse;
      padding: 0;
      margin-top: 48px;
  }
`;

const VisitPostContentbreadcrumbs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: var(--text-xs);
  padding: 12px 16px;
  font-weight: 700;
  svg {
    font-size: var(--text-xs);
  }
`;

const VisitPostContentHeaderItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-subtitle);
  transition: all 0.3s ease;
  gap: 6px;
  &:hover {
    color: var(--color-info);
    svg {
      transition: all 0.3s ease;
      transform: rotate(180deg);
    }
  }
`;

const PostTitle = styled.div`
  font-size: var(--text-lg);
  font-weight: 900;
`;

const PostDateInformation = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-subtitle);
  cursor: pointer;
  margin-top: 8px;
   @media (max-width: 480px) {
    width: 100%;
  }
`;

const PostDateInfomarionSumMenu = styled.div`
  margin-top: 12px;
  height: ${({ $opened }) => ($opened ? "60px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const PostWarning = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: var(--color-accent);
  border-bottom: 1px solid var(--color-subtitle);
  padding: 16px 0;
  margin-top: 12px;
  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
   @media (max-width: 480px) {
    width: 100%;
  }
`;

const PostInformation = styled.div`
  width: 80%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;
  padding: 16px 0;
   @media (max-width: 480px) {
    width: 100%;
  }
`;

const PostInformationHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserInformation = styled.div`
  display: flex;
   gap: 16px;
   @media (max-width: 480px) {
       width: 100%;
       position: fixed;
       align-items: center;
       justify-content: center;
       background-color: var(--color-secondary);
       bottom: 0;
       left: 0;
       padding: 10px ;
       z-index: 999;
       div{
        width: 50%;
        color: var(--color-primary);
        background-color: var(--color-accent);
        &:hover{
          color: var(--color-primary);
            background: rgb(219, 112, 125);
          
        }
       }
   }
`
const UserInformationBtn = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover {
    background: rgb(219, 112, 125);
  }
`;
const PostItems = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 12px;
  font-size: var(--text-lg);
  font-weight: 700;
  @media (max-width: 480px) {
    width: 100%;
  }
  `
const PostItem = styled.div`
   width: 100%;
   padding: 16px 12px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid var(--color-subtitle);
`
const PostItemTitle = styled.div`
  color: var(--color-subtitle);
`
const PostItemValue = styled.div`
   color: var(--color-info);
`
const ChatUserBtn = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: transparent;
  color: var(--color-subtitle);
  border: 1px solid var(--color-subtitle);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  &:hover {
    background: var(--color-subtitle);
    color: var(--color-info);
    border-color: var(--color-info);
  }
`;
const PostInformationIcons = styled.div`
  display: flex;
  @media (max-width: 480px) {
     width: 100%;
     position: fixed;
     align-items: center;
     justify-content: space-between;
     background-color: var(--color-secondary);
     padding: 6px 4px;
     top: 0;
     left: 0;
     z-index: 99;
  }
`
const PostInformationIcon = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  &:hover {
    background: var(--color-subtitle);
  }
  svg {
    font-size: var(--text-base);
  }
`;

const PostInformationBackIcon = styled(PostInformationIcon)`
  display: none;

  @media (max-width: 480px) {
     display: flex;
     margin-right:  auto;
  }
`

const PostTable = styled.table`
  width: 100%;
  direction: rtl;
  border-collapse: collapse;
  margin-top: 12px;
  border-bottom: 1px solid var(--color-subtitle);
`;

const PostThead = styled.thead`
  border-radius: 8px;
`;

const PostTbody = styled.tbody``;

const PostTr = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 8px 12px;
`;

const PostTh = styled.th`
  font-weight: 600;
  color: var(--color-subtitle);
  font-size: var(--text-sm);
  text-align: center;
  padding: 8px 4px;
`;

const PostTd = styled.td`
  font-size: var(--text-sm);
  color: var(--color-info);
  text-align: center;
  padding: 8px 4px;
  font-weight: 900;
`;

const VisitPostContentRightSection = styled.div`
 width: calc(50% - 6px);
  @media (max-width: 480px) {
     width: 100%;
     padding: 16px;
  }
`;

const VisitPostContentLeftSection = styled.div`
   width: calc(50% - 6px);

    @media (max-width: 480px) {
     width: 100%;
     margin-top: 30px;

  }
`;

const VisitPostFooter = styled.div`
  padding: 20px 35px;
  border-top: 1px solid var(--color-border);
  margin-top: 20px;
`;

function Visit() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobile , setIsMobile] = useState(false)
  const [openDetail, setOpenDetail] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const postId = Number(params.id);
    const foundPost = adsData.find((ad) => ad.id === postId);
    setPost(foundPost || null);
    setLoading(false);
  }, [params.id]);

    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (!post) {
    navigate("/");
    return null;
  }

  return (
    <VisitPostWrapper>
          {!isMobile ? <NavbarWrapper>
            <Navbar />
       </NavbarWrapper> : ''}

      <VisitPostContentWrapper>
        <VisitPostContentRightSection>

      <VisitPostContentbreadcrumbs>
        <VisitPostContentHeaderItem>
          {post.category} <ArrowBackIosIcon />
        </VisitPostContentHeaderItem>
        <VisitPostContentHeaderItem>
          {post.subCategory} <ArrowBackIosIcon />
        </VisitPostContentHeaderItem>
        <VisitPostContentHeaderItem>
          {post.title} <ArrowBackIosIcon />
        </VisitPostContentHeaderItem>
      </VisitPostContentbreadcrumbs>
          <PostTitle>{post.title}</PostTitle>

          <PostDateInformation onClick={() => setOpenDetail((prev) => !prev)}>
            {dayjs(post.date).fromNow()} در {post.city}
            <div
              style={{
                transform: openDetail ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}>
              <KeyboardArrowDownIcon />
            </div>
          </PostDateInformation>

          <PostDateInfomarionSumMenu $opened={openDetail}>
            <div>انتشار آگهی: {dayjs(post.date).format("DD MMMM YYYY")}</div>
            <div>
              آخرین بروزرسانی: {dayjs(post.date).format("DD MMMM YYYY")}
            </div>
          </PostDateInfomarionSumMenu>

          <PostWarning>
            <div>
              <WarningAmberRoundedIcon /> زنگ‌های خطر قبل از معامله
            </div>
            <ArrowBackIosIcon />
          </PostWarning>

          <PostInformation>
            <PostInformationHeader>
               <UserInformation>
                <UserInformationBtn>اطلاعات تماس</UserInformationBtn>
                 <ChatUserBtn>چت</ChatUserBtn>
               </UserInformation>
               <PostInformationIcons>
                 <PostInformationIcon>
                <BookmarkBorderRoundedIcon />
              </PostInformationIcon>
              <PostInformationIcon>
                <ShareRoundedIcon />
              </PostInformationIcon>
              <PostInformationBackIcon>
                <ArrowBackIosIcon />
              </PostInformationBackIcon>
               </PostInformationIcons>
            </PostInformationHeader>

            <PostTable>
              <PostThead>
                <PostTr>
                  <PostTh>کارکرد</PostTh>
                  <PostTh>مدل (سال تولید)</PostTh>
                  <PostTh>رنگ</PostTh>
                </PostTr>
              </PostThead>
              <PostTbody>
                <PostTr>
                  <PostTd>کیلومتر</PostTd>
                  <PostTd>۱۴۰۴</PostTd>
                  <PostTd>سفید</PostTd>
                </PostTr>
              </PostTbody>
            </PostTable>
          </PostInformation>
          <PostItems >
            <PostItem> <PostItemTitle>وضعیت</PostItemTitle>  <PostItemValue>نو</PostItemValue></PostItem>
            <PostItem> <PostItemTitle>متراژ</PostItemTitle>  <PostItemValue>425متر</PostItemValue></PostItem>
            <PostItem> <PostItemTitle>سن بنا</PostItemTitle>  <PostItemValue>1385</PostItemValue></PostItem>
            <PostItem> <PostItemTitle>قابل تهاتر</PostItemTitle>  <PostItemValue>هست</PostItemValue></PostItem>
          </PostItems>
        </VisitPostContentRightSection>
          
        <VisitPostContentLeftSection>
           <Slider images= {post.images} />
        </VisitPostContentLeftSection>
      </VisitPostContentWrapper>
      <VisitPostFooter>

      </VisitPostFooter>
    </VisitPostWrapper>
  );
}

export default Visit;
