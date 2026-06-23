import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fa';


dayjs.extend(relativeTime);
dayjs.locale('fa');

const AdCard = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-primary);
  width: calc(50% - 20px);
  min-width: 360px;
  border-radius: 2px;
  border: 1px solid var(--color-subtitle);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-start;
  transition: all 0.3s ease;
  padding: 12px 14px;
  cursor: pointer;
  
  @media (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;

const CardImageBox = styled.div`
  width: 30%;
  height: 130px;
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
  width: 30%;
  height: 130px;
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
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  width: 100%;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-info);
  margin: 0 0 6px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  @media (max-width: 480px) {
  font-size: var(--text-base);
    
  }
`;

const CardPrice = styled.div`
  font-size: 17px;
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
  const formattedDate = dayjs(ad.date).locale('fa').format('DD MMMM YYYY');

  return (
    <AdCard>
      <CardContent>
        <CardTitle>{ad.title}</CardTitle>
        <CardMeta>
        <CardPrice>{ad.price.toLocaleString()} تومان</CardPrice>
          <CardDate>{relativeDate}</CardDate>
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