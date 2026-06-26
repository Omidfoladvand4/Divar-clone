import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { adsData } from "../services/fakePosts";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
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
`;

const VisitPostContentWrapper = styled.div`
  display: flex;
  padding: 20px 35px;
  gap: 5%;
  flex-wrap: wrap;
`;

const VisitPostContentbreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: var(--text-xs);
  padding: 12px 16px;
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
`;

const PostInformation = styled.div`
  width: 80%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;
  padding: 16px 0;
`;

const PostInformationHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
  width: 45%;
`;

const VisitPostContentLeftSection = styled.div`
  width: 45%;
`;

const VisitPostMianImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 8px;
`;
const VisitPostImageBox = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: flex;
  overflow: scroll;
`
const VisitpostImage = styled.div`
  
`
const VisitPostFooter = styled.div`
  padding: 20px 35px;
  border-top: 1px solid var(--color-border);
  margin-top: 20px;
`;

function Visit() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return (
      <VisitPostWrapper>
        <Navbar />
      </VisitPostWrapper>
    );
  }

  if (!post) {
    navigate("/");
    return null;
  }

  return (
    <VisitPostWrapper>
      <Navbar />

      {/* ===== برادکام ===== */}
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

      <VisitPostContentWrapper>
        <VisitPostContentRightSection>
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
              <UserInformationBtn>اطلاعات تماس</UserInformationBtn>
              <ChatUserBtn>چت</ChatUserBtn>
              <PostInformationIcon>
                <BookmarkBorderRoundedIcon />
              </PostInformationIcon>
              <PostInformationIcon>
                <ShareRoundedIcon />
              </PostInformationIcon>
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
        </VisitPostContentRightSection>

        <VisitPostContentLeftSection>
          <VisitPostMianImage src={post.image} alt={post.title} />
          <VisitPostImageBox>
             <VisitpostImage></VisitpostImage>
          </VisitPostImageBox>
        </VisitPostContentLeftSection>
      </VisitPostContentWrapper>
      <VisitPostFooter>فوتر</VisitPostFooter>
    </VisitPostWrapper>
  );
}

export default Visit;
