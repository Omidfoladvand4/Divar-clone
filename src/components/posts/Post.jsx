import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fa';
import { useNavigate } from "react-router-dom";


dayjs.extend(relativeTime);
dayjs.locale('fa');

const AdCard = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-primary);
  width: calc(50% - 20px);
  min-width: 320px;
  max-width: 360px;
  border-radius: 2px;
  border: 1px solid var(--color-subtitle);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-start;
  transition: all 0.3s ease;
  padding: 12px 14px;
  cursor: pointer;
  
  @media (max-width: 600px) {
    width: calc(100% - 10px);
    border: none;
    border-bottom: 1px solid var(--color-subtitle);
  }
`;

const CardImageBox = styled.div`
  width: 40%;
  height: 110px;
  position: relative;
    @media (max-width: 480px) {
     width: 35%;
     height: 100px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const ImageCount = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 32px;
  height: 20px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--color-primary);
  font-weight: 600;
`;

const NoImage = styled.div`
  width: 40%;
  height: 110px;
  flex-shrink: 0;
  background: var(--color-subtitle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
  @media (max-width: 480px) {
     width: 35%;
     height: 100px;
  }
`;

const CardContent = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h4`
  width: 100%;
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-info);
  margin: 0 0 6px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 480px) {
  font-size: var(--text-base);
    
  }
`;

const CardPrice = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: var(--color-subtitle);
  margin-bottom: 6px;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  font-size: 12px;
  color: var(--color-subtitle);
`;

const CardDate = styled.span`
  font-size: 11px;
  color: var(--color-subtitle);
  opacity: 0.7;
`;

function Post({ ad }) {
  const relativeDate = dayjs(ad.date).fromNow();
  const navigate = useNavigate()
  const formattedDate = dayjs(ad.date).locale('fa').format('DD MMMM YYYY');
  const visitPostHandler = (id) => {
      navigate(`/v/${id}`)
  }
  return (
    <AdCard onClick={() => visitPostHandler(ad.id)}>
      <CardContent>
        <CardTitle>{ad.title}</CardTitle>
        <CardMeta>
        <CardPrice>{ad.price.toLocaleString()} تومان</CardPrice>
          <CardDate>{relativeDate} در {ad.subCategory}</CardDate>
          <CardDate>{ad.district}</CardDate>
        </CardMeta>
      </CardContent>

      {ad.hasPhoto && ad.image ? (
        <CardImageBox>
          <CardImage src={ad.image} alt={ad.title} />
          <ImageCount>2</ImageCount>
        </CardImageBox>
      ) : (
        <NoImage>بدون عکس</NoImage>
      )}
    </AdCard>
  );
}

export default Post;